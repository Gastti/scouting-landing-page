'use client'
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
                const response = await axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=Scouting_CyGD&count=5', {
                    headers: {
                        Authorization: `Bearer jgWHrlHAR4NZk7ovWZjHVHqH5`
                    }
                });
                setTweets(response.data);
                console.log(tweets)
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
