import * as fs from 'fs';
import axios from 'axios';
import { NextResponse } from "next/server";
import * as path from 'path';

const dataFilePath = path.join(__dirname, 'instagram.json');
const RAPIDAPI_INSTAGRAM_KEY = process.env.RAPIDAPI_INSTAGRAM_KEY
const RAPIDAPI_INSTAGRAM_HOST = process.env.RAPIDAPI_INSTAGRAM_HOST

export interface InstagramPost {
    image: InstagramImage;
    code: string;
}

interface InstagramImage {
    width: number;
    height: number;
    url: string;
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

// Guardar imagenes
async function downloadImageIfNotExists(url: string, filename: string): Promise<void> {
    const imagePath = path.resolve('public', filename);

    // Verificar si el archivo ya existe en la carpeta "public"
    if (fs.existsSync(imagePath)) {
        console.log(`La imagen "${filename}" ya existe en la carpeta "public", no se descargará.`);
        return;
    }

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    response.data.pipe(fs.createWriteStream(imagePath));

    return new Promise<void>((resolve, reject) => {
        response.data.on('end', () => {
            resolve();
        });

        response.data.on('error', (err: Error) => { // Aquí se especifica el tipo de 'err'
            reject(err);
        });
    });
}

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

                // Descargar y guardar las imágenes si no existen en la carpeta "public"
                await Promise.all(getPosts.map(async (item: any) => {
                    const { image_versions2, code } = item;
                    const imageUrl: string = image_versions2.candidates[3].url;
                    const filename: string = `${code}.jpg`;

                    // Descargar y guardar la imagen si no existe
                    await downloadImageIfNotExists(imageUrl, filename);
                }));

                const mapedPosts: InstagramPost[] = getPosts.map((item: any) => {
                    const { image_versions2, code }: { image_versions2: any, code: string } = item;
                    const image = {
                        width: image_versions2.candidates[3].width,
                        height: image_versions2.candidates[3].height,
                        url: `${code}.jpg`
                    };
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