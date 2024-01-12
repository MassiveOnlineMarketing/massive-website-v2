import { PurpleCheckmarkRound } from '@/assets/icons'
import { Heading, Paragraph, SubHeading } from '@/components/ui/typography/typography'
import container from '@/styles/styles'
import Image from 'next/image'
import React from 'react'

import ModalFullScreen from "@/features/modal/FullScreenModal";
import { MultiStepContactForm } from "@/features/contact-form/multistep/contact-form";
import { ArrowContactSvg } from '../_assets'

const SectionGesprek = () => {
  return (
    <div className={`mt-[130px] relative ${container.maxWidth} grid grid-cols-2`}>
      <ArrowContactSvg className='absolute top-0 left-1/2 -translate-x-1/2' />

      <div className='my-auto'>
        <div className='flex flex-col gap-4 pr-4'>
          <SubHeading level='h2' size='sm' colorScheme='gradient-primary' className='py-[6px]'>{SECTION_GESPREK.subheading}</SubHeading>
          <Heading level='h3' size='4xl' >{SECTION_GESPREK.heading}</Heading>
          <Paragraph>{SECTION_GESPREK.paragraph}</Paragraph>
          <div className='h-[1px] w-full bg-gray-300'></div>
        </div>
        <ul>
          {SECTION_GESPREK.list.map((item) => (
            <li key={item} className='flex flex-row gap-4 items-center mt-6'>
              <PurpleCheckmarkRound />
              <Paragraph className='font-medium'>{item}</Paragraph>
            </li>
          ))}
        </ul>

        <ModalFullScreen buttonText={SECTION_GESPREK.buttonLabel} className='mt-12' animationDuration={1000} animationIn='element' animationOut='element-out'> 
          <MultiStepContactForm />
        </ModalFullScreen>

      </div>

      <Image src={'/home/gratis-advies-afbeelding-persoon-belt-met-massive.png'} width={650} height={618} alt='persoon die belt met massive'  />
    </div>
  )
}

const SECTION_GESPREK = {
  subheading: "Strategisch Online Advies",
  heading: "Gratis Advies, Onbeperkte Mogelijkheden",
  paragraph: "Niet zeker welke marketingdiensten het beste passen bij uw onderneming?Geen zorgen, onze toegewijde specialisten staan klaar om u te begeleiden. Plan een vrijblijvend gesprek in en laten wij samen kijken naar het herdefiniëren van uw online strategie.",
  list: [
    "Op Maat Gemaakt Advies",
    "Ontdek uw Digitaal Potentieel",
    "Gratis en Vrijblijvend"
  ],
  buttonLabel: "Plan een Vrijblijvend Gesprek in"
}

export default SectionGesprek