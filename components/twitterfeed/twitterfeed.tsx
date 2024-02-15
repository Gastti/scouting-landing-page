'use client'
import React, { useState, useEffect } from 'react';
import { Tweet, TweetSkeleton, TweetNotFound} from 'react-tweet';

interface Response {
    message: string;
    lastCall: Date;
    tweets: Array<string>;
}

export default function TwitterFeed() {
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTweets = async () => {
        try {
            const response = await fetch('/api/twitter')
            if (response.ok) {
                const data = await response.json()
                const tweets = data.tweets
                setTweets(tweets)
            }
            setLoading(false)

        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTweets()
    }, []);
    return (
            <div className='light flex flex-row flex-wrap max-w-[1200px] gap-5 justify-center'>
                {tweets.map(tweet => (
                    <Tweet key={tweet} id={tweet}/>
                ))}
                {loading && (<><TweetSkeleton /> <TweetSkeleton /> <TweetSkeleton /></>)}
                {!loading && tweets.length == 0 && <TweetNotFound />}
            </div>
    )
}
