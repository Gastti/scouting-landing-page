// import { NextResponse } from "next/server";
// import TwitterAPIv2 from 'twitter-api-v2';

// import TwitterApi from 'twitter-api-v2';

// const appKey = process.env.TWITTER_KEY
// const appSecret = process.env.TWITTER_KEY_SECRET
// const accessToken = process.env.TWITTER_ACCESS_TOKEN
// const accessSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET

// interface Tweet {
//     id: string;
//     text: string;
//     created_at: string;
// }

// interface TwitterResponse {
//     data: {
//         data: Tweet[];
//     };
// }

// const client = new TwitterApi({
//     appKey,
//     appSecret,
//     accessToken,
//     accessSecret,
// });

// async function getTweets(username: string): Promise<Tweet[]> {
//     //   const response = await client.get(`users/${username}/tweets`);

//     const response = await readOnlyClient.v2.listTweets()

//     return response
// }

// export async function GET() {
//     const tweets = await getTweets("Scouting_CyGD");

//     return NextResponse.json({
//         tweets,
//     });
// }

import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        route: 'Working'
    })
}