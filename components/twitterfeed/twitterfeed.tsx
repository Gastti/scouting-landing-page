'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TwitterFeed() {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
       
    

        
    }, []);
    return (
        <div>
            <h1>Últimos Tweets</h1>
            <ul>
                {/* {tweets.map(tweet => (
                    <li key={tweet.id}>{tweet.text}</li>
                ))} */}
            </ul>
        </div>
    )
}
