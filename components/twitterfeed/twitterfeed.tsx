import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Tweet {
    id: string;
    text: string;
}

export default function TwitterFeed() {
    const [tweets, setTweets] = useState<Array<Tweet>>([]);

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const response = await axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=TU_USUARIO_DE_TWITTER&count=5', {
                    headers: {
                        Authorization: `Bearer TUS_CREDENCIALES_DE_API_DE_TWITTER_AQUÍ`
                    }
                });
                setTweets(response.data);
            } catch (error) {
                console.error('Error fetching tweets:', error);
            }
        };

        fetchTweets();
    }, []);
    return (
        <div>
            <h1>Últimos Tweets</h1>
            <ul>
                {tweets.map(tweet => (
                    <li key={tweet.id}>{tweet.text}</li>
                ))}
            </ul>
        </div>
    )
}
