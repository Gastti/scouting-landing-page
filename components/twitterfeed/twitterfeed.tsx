'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Tweet {
    id: string;
    text: string;
}

const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAJUOsQEAAAAA5JM8SQjnzttRwtGj%2B6GynFDy7Q4%3D0IGWJIhs5dAef7tbUqWTW3Nyp84yTMkC41u4DCdlenEvxsFe4Q'

export default function TwitterFeed() {
    const [tweets, setTweets] = useState<Array<Tweet>>([]);

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const response = await axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=Scouting_CyGD&count=5', {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`
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
