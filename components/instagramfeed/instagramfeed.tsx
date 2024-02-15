'use client'
import React, { useState, useEffect } from 'react';
import InstagramPost from './instagrampost';
import { InstagramPost as Post } from '@/app/api/instagram/route';


export default function InstagramFeed() {
    const [posts, setPosts] = useState<Array<Post>>([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/instagram')
            if (response.ok) {
                const data = await response.json()
                const posts = data.posts
                setPosts(posts)
            }

            setLoading(false)

        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, []);
    return (
        <div className='grid grid-cols-3 w-full max-w-[1120px] gap-1 md:gap-5'>
            {posts.map(post => (
                <InstagramPost
                    key={post.code}
                    imageHeight={post.image.height}
                    imageWidth={post.image.width}
                    imageUrl={post.image.url}
                    code={post.code}
                />
            ))}
            {loading && (<>
                <div className="col-span-1 aspect-square">
                    <div className="instagram-post-skeleton h-full bg-gray-200 flex items-center justify-center"></div>
                </div>
                <div className="col-span-1 aspect-square">
                    <div className="instagram-post-skeleton h-full bg-gray-200 flex items-center justify-center"></div>
                </div>
                <div className="col-span-1 aspect-square">
                    <div className="instagram-post-skeleton h-full bg-gray-200 flex items-center justify-center"></div>
                </div>
                <div className="col-span-1 aspect-square">
                    <div className="instagram-post-skeleton h-full bg-gray-200 flex items-center justify-center"></div>
                </div>
                <div className="col-span-1 aspect-square">
                    <div className="instagram-post-skeleton h-full bg-gray-200 flex items-center justify-center"></div>
                </div>
                <div className="col-span-1 aspect-square">
                    <div className="instagram-post-skeleton h-full bg-gray-200 flex items-center justify-center"></div>
                </div>
            </>)}
            {!loading && posts.length == 0 && 'No se han podido cargar las publicaciones de instagram.'}
        </div>
    )
}
