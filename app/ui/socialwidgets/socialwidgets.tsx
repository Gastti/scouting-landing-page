import InstagramFeed from '@/components/instagramfeed/instagramfeed'
import Section from '@/components/section/section'
import SectionTitle from '@/components/sectiontitle/sectiontitle'
import TwitterFeed from '@/components/twitterfeed/twitterfeed'
import React from 'react'

export default function SocialWidgets() {
    return (
        <Section className='py-20'>
            <SectionTitle title='Twitter' subtitle='Nuestras ultimas noticias en' />
            <TwitterFeed />
            <SectionTitle title='Instagram' subtitle='Nuestros ultimos posts en' />
            <InstagramFeed />
        </Section>
    )
}
