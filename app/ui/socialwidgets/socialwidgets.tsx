import Section from '@/components/section/section'
import TwitterFeed from '@/components/twitterfeed/twitterfeed'
import React from 'react'
import { Tweet } from 'react-tweet'

export default function SocialWidgets() {
    return (
        <Section>
            {/* <div>
                <Tweet id='1738309684778410173' />
            </div> */}
            <TwitterFeed />
        </Section>
    )
}
