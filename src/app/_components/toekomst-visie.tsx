import Title from '@/components/ui/typography/title'
import { Heading, Paragraph, SubHeading } from '@/components/ui/typography/typography'
import container, { constants } from '@/styles/styles'
import Image from 'next/image'
import React from 'react'

import ModalFullScreen from "@/features/modal/FullScreenModal";
import { MultiStepContactForm } from "@/features/contact-form/multistep/contact-form";


const ToekomstVisie = () => {
  return (
    <div className={`relative overflow-hidden rounded-[32px] shadow-custom-lg   ${container.maxWidth} dark-border-gradient z-10`}>
      <div className='px-12 py-[82px] gradient-toekomstvisie '>
        <Image src='/home/toekomstvisie-en-ambitie-background.png' width={977} height={484} alt='toekomstvisie en ambitie background' className='absolute top-0 right-0 h-full' />

        <Title className='relative z-20 max-w-[600px]'>
          <SubHeading level="h2" size='sm' colorScheme='glass-dark' variant='pill'>{TOEKOMST_VISIE.subHeading}</SubHeading>
          <Heading level='h3' size='4xl' colorScheme='white' colorSchemeHighlight='gradient-primary' highlight='Massive'>{TOEKOMST_VISIE.heading}</Heading>
          <Paragraph colorScheme='white'>{TOEKOMST_VISIE.paragraph}</Paragraph >
        </Title>

        <ModalFullScreen buttonText={TOEKOMST_VISIE.buttonLabel} className='mt-8' animationDuration={1000} animationIn='element' animationOut='element-out' variant='dark'> 
            <MultiStepContactForm />
        </ModalFullScreen>
      </div>
    </div>
  )
}

const TOEKOMST_VISIE = {
  subHeading: "Toekomstvisie en Ambities",
  heading: "Bij Massive zijn we voordurend gericht op de toekomst. ",
  paragraph: "We streven ernaar om de nieuwste trends en technologieën voor te zijn. Dit zodat we onze klanten naar nieuwe hoogten van digitale uitmuntendheid kunnen leiden. Onze ambitie is om constant te innoveren en nieuwe grenzen te verkennen, samen met onze klanten en partners.",
  buttonLabel: "Neem contact op"
}

export default ToekomstVisie