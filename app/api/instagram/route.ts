import * as fs from 'fs';
import axios from 'axios';
import { NextResponse } from "next/server";
import * as path from 'path';

const dataFilePath = path.join(__dirname, 'instagram.json');
const RAPIDAPI_INSTAGRAM_KEY = process.env.RAPIDAPI_INSTAGRAM_KEY
const RAPIDAPI_INSTAGRAM_HOST = process.env.RAPIDAPI_INSTAGRAM_HOST

export interface InstagramPost {
    image: InstagramImage,
    code: ''
}

export interface InstagramImage {
    url: string;
    width: number;
    height: number;
}

const options = {
    method: 'GET',
    url: 'https://instagram230.p.rapidapi.com/user/posts',
    params: {
        username: 'scouting_cygd'
    },
    headers: {
        'X-RapidAPI-Key': RAPIDAPI_INSTAGRAM_KEY,
        'X-RapidAPI-Host': RAPIDAPI_INSTAGRAM_HOST
    }
};

// Función para cargar los datos del archivo JSON
function loadApiData(): { lastCall: Date, posts: InstagramPost[] } {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        const parsedData = JSON.parse(data);

        // Verificar si la última llamada es una cadena de fecha y convertirla a un objeto Date si es necesario
        if (typeof parsedData.lastCall === 'string') {
            parsedData.lastCall = new Date(parsedData.lastCall);
        }

        return parsedData
    } catch (error) {
        // Si el archivo no existe o hay un error al leerlo, retornar valores predeterminados
        return { lastCall: new Date(0), posts: [] };
    }
}

// Función para guardar los datos actualizados en el archivo JSON
function saveApiData(apiData: { lastCall: Date, posts: InstagramPost[] }) {
    fs.writeFileSync(dataFilePath, JSON.stringify(apiData));
}

export async function GET() {
    const apiData = loadApiData();
    const now = new Date();

    // Calcular la diferencia de tiempo desde la última llamada en horas
    const hoursSinceLastCall = (now.getTime() - apiData.lastCall.getTime()) / (1000 * 60 * 60);

    try {
        if (hoursSinceLastCall < 15) {
            // Si no han pasado 15 horas desde la última llamada, responder con los datos almacenados
            return NextResponse.json({ message: 'Datos almacenados en la ultima petición.', lastCall: apiData.lastCall, posts: apiData.posts });
        } else {
            try {
                const response = await axios.request(options);
                const data = await response.data
                const getPosts = data.items.slice(0, 6);
                const mapedPosts: InstagramPost[] = getPosts.map((item: any) => {
                    const { image_versions2, code }: { image_versions2: any, code: string } = item;
                    const image: InstagramImage = {
                        url: image_versions2.candidates[0].url,
                        width: image_versions2.candidates[0].width,
                        height: image_versions2.candidates[0].height
                    }
                    return { image, code };
                });

                // Actualizar los datos de la API con la nueva fecha/hora y el incremento en el contador de llamadas
                apiData.lastCall = now;
                apiData.posts = mapedPosts;

                // Guardar los datos actualizados en el archivo JSON
                saveApiData(apiData);
                return NextResponse.json({
                    message: 'Datos actualizados.',
                    lastCall: apiData.lastCall,
                    posts: apiData.posts
                })
            } catch (error) {
                const apiData = loadApiData();

                return NextResponse.json({
                    message: 'Error en el servidor.',
                    lastCall: apiData.lastCall,
                    posts: apiData.posts,
                    error
                })
            }
        }
    } catch (error) {
        return NextResponse.json({ message: 'Error en el servidor.' })
    }
}