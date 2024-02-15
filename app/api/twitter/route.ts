import * as fs from 'fs';
import axios from 'axios';
import { NextResponse } from "next/server";
import * as path from 'path';

const dataFilePath = path.join(__dirname, 'twitter.json');
const RAPIDAPI_TWITTER_KEY = process.env.RAPIDAPI_TWITTER_KEY
const RAPIDAPI_TWITTER_HOST = process.env.RAPIDAPI_TWITTER_HOST

const options = {
    method: 'GET',
    url: 'https://twitter154.p.rapidapi.com/user/tweets',
    params: {
        username: 'scouting_cygd',
        limit: '5',
        include_replies: false,
        include_pinned: false
    },
    headers: {
        'X-RapidAPI-Key': RAPIDAPI_TWITTER_KEY,
        'X-RapidAPI-Host': RAPIDAPI_TWITTER_HOST
    }
};

// Función para cargar los datos del archivo JSON
function loadApiData(): { lastCall: Date, tweets: string[] } {
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
        return { lastCall: new Date(0), tweets: [] };
    }
}

// Función para guardar los datos actualizados en el archivo JSON
function saveApiData(apiData: { lastCall: Date, tweets: string[] }) {
    fs.writeFileSync(dataFilePath, JSON.stringify(apiData));
}

export async function GET() {
    const apiData = loadApiData();
    const now = new Date();

    // Calcular la diferencia de tiempo desde la última llamada en horas
    const hoursSinceLastCall = (now.getTime() - apiData.lastCall.getTime()) / (1000 * 60 * 60);

    try {
        if (hoursSinceLastCall < 4) {
            // Si no han pasado 4 horas desde la última llamada, responder con los datos almacenados
            return NextResponse.json({ message: 'Datos almacenados en la ultima petición.', lastCall: apiData.lastCall, tweets: apiData.tweets });
        } else {
            try {
                let tweets;
                const response = await axios.request(options);
                const data = response.data.results
                const firstFiveIds = data.slice(0, 5).map((t: { tweet_id: any; }) => t.tweet_id);
                tweets = firstFiveIds

                // Actualizar los datos de la API con la nueva fecha/hora y el incremento en el contador de llamadas
                apiData.lastCall = now;
                apiData.tweets = tweets

                // Guardar los datos actualizados en el archivo JSON
                saveApiData(apiData);
                return NextResponse.json({
                    message: 'Datos actualizados.',
                    lastCall: apiData.lastCall,
                    tweets: apiData.tweets
                })
            } catch (error) {
                const apiData = loadApiData();

                return NextResponse.json({
                    message: 'Error en el servidor.',
                    lastCall: apiData.lastCall,
                    tweets: apiData.tweets,
                    error
                })
            }
        }
    } catch (error) {
        return NextResponse.json({ message: 'Error en el servidor.' })
    }
}