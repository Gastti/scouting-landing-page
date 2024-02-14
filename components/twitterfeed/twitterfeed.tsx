'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tweet, TweetSkeleton, TweetNotFound} from 'react-tweet';

export default function TwitterFeed() {
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(true);

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
            'X-RapidAPI-Key': '5e86e64775mshd6f172431dd06acp1246bajsn140a99d9ce62',
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
    };

    const fetchTweets = async () => {
        try {
            const response = await axios.request(options);
            const data = response.data.results
            const firstFiveIds = data.slice(0, 5).map((t: { tweet_id: any; }) => t.tweet_id);
            setTweets(firstFiveIds)
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
