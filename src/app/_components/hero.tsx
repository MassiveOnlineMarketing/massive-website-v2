import { WhiteWave } from '@/assets/backgrounds'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/typography/title'
import { Heading, Paragraph, SubHeading } from '@/components/ui/typography/typography'
import container from '@/styles/styles'
import Image from 'next/image'
import React from 'react'


import ModalFullScreen from "@/features/modal/FullScreenModal";
import { MultiStepContactForm } from "@/features/contact-form/multistep/contact-form";

const Hero = () => {
  return (
    <div className='relative'>
      <div className={`grid grid-cols-2 ${container.maxWidth}`}>
        <div className='my-auto'>
          <Title>
            <SubHeading level="h1" size="sm" colorScheme="glass" variant="pill" className='text-primary'>{HERO.subheading}</SubHeading>
            <Heading level='h2' size='7xl' >{HERO.heading}</Heading>
            <Paragraph size='lg' >{HERO.paragraph}</Paragraph>
          </Title>
          <ModalFullScreen buttonText={HERO.buttonLabel} className='mt-6' animationDuration={1000} animationIn='element' animationOut='element-out'> 
            <MultiStepContactForm />
          </ModalFullScreen>
          {/* <Button variant='primary' className='mt-6'>{HERO.buttonLabel}</Button> */}
        </div>
        
        <Image src={'/home/hero-image-home.png'} width={750} height={730} alt='klant die blij zijn website laat zien' className='py-[104px]' />
      </div>

      <WhiteWave className='absolute bottom-0 left-0 -z-10' />	
    </div>
  )
}


const HERO = {
  subheading: "Massive Online Marketing",
  heading: "Waar Innovatie Succes Ontmoet",
  paragraph: "Ontdek het verhaal achter onze passie voor digitale groei en hoe wij het landschap van digitale marketing herdefiniëren.",
  buttonLabel: "Neem contact op"
}


export default Hero 