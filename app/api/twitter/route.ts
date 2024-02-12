import { NextResponse } from "next/server";

const token = 'AAAAAAAAAAAAAAAAAAAAAJUOsQEAAAAAUEcyAkFT35n3YSVmv5DhDnatMzo%3Dko1rwRE9u1I1CqwvTTalJoMuyTKQ84aMuyY4UvCW3wBPWtJ0f8'

export async function GET(){
    const tweets = await fetch('https://api.twitter.com/2/tweets?ids=Scouting_CyGD', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    console.log(tweets)
    return NextResponse.json({
        route: 'Twitter',
        tweets
    })
}