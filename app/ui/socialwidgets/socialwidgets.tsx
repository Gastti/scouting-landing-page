import Section from '@/components/section/section'
import SectionTitle from '@/components/sectiontitle/sectiontitle'
import TwitterFeed from '@/components/twitterfeed/twitterfeed'
import React from 'react'
import { Tweet } from 'react-tweet'

export default function SocialWidgets() {
    return (
        <Section className='py-20'>
            <SectionTitle title='Ultimas Noticias' subtitle='Mantente informado con las' />
            <TwitterFeed />
        </Section>
    )
}
