'use client'

import { Button } from '@/components/ui/button'
import Title from '@/components/ui/typography/title'
import { Heading, Paragraph, SubHeading } from '@/components/ui/typography/typography'
import { SwipeArrowNav, SwipeContent, SwipeDots, SwipeProvider } from '@/features/swipe'
import container, { constants, styles } from '@/styles/styles'
import { ComputerDesktopIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { AcademicCapIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

import { useMediaQuery } from 'react-responsive'

export const Diensten = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className={`${container.maxWidth}`}>
      <Title className='max-w-[641px] px-4 md:px-0'>
        <SubHeading level='h2' size='sm' colorScheme='gradient-primary'>{DIENSTEN.title.subheading}</SubHeading>
        <Heading level='h3' size='4xl'>{DIENSTEN.title.heading}</Heading>
        <Paragraph size='base'>{DIENSTEN.title.paragraph}</Paragraph>
      </Title>
      

      {isMobile ? (
        <div className='relative mt-8'>
          <SwipeProvider numberOfCards={6}>
            <SwipeArrowNav />
            <SwipeContent className='mt-4' >
              {DIENSTEN.cards.map((card, i) => (
                <div key={i} className={`px-3 pt-3 pb-4 rounded-[20px] backdrop-blur-md shadow-custom-lg h-full flex flex-col ${constants.glassFill}`}>
                  <div className='w-full h-[207px]'>
                    <Image src={card.image} width={614} height={214} alt={`${card.subHeading} card image `} className='h-full  md:w-[614px] md:h-[214px]' />
                  </div>

                  <div className='flex flex-col h-full justify-between'>
                    <Title className='mt-3'>
                      <SubHeading level='h4' size='sm' className='font-normal flex flex-row gap-[10px] py-[6px] items-center'>{card.icon} {card.subHeading}</SubHeading>
                      <Heading level='h5' size='2xl'>{card.heading}</Heading>
                      <Paragraph>{card.paragraph}</Paragraph>
                    </Title>
                    <Button variant='glass' size='sm' className='mt-3 pr-[10px]'>{card.buttonLabel} <ChevronRightIcon className='w-4 h-4' /></Button>

                  </div>
                </div>
              ))}
            </SwipeContent>
            <SwipeDots className='mt-16' />
          </SwipeProvider>
        </div>
      ) : (
        <div className=' grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-[52px]'> 
          {DIENSTEN.cards.map((card, i) => (
              <div key={i} className={`px-3 pt-3 pb-4 rounded-[20px] backdrop-blur-md shadow-custom-lg h-full flex flex-col ${constants.glassFill}`}>
                <Image src={card.image} width={614} height={214} alt={`${card.subHeading} card image`}  />

                <div className='flex flex-col h-full justify-between'>
                  <Title className='mt-3 px-3'>
                    <SubHeading level='h4' size='sm' className='font-normal flex flex-row gap-[10px] py-[6px] items-center'>{card.icon} {card.subHeading}</SubHeading>
                    <Heading level='h5' size='2xl'>{card.heading}</Heading>
                    <Paragraph>{card.paragraph}</Paragraph>
                  </Title>
                  <Button variant='glass' size='sm' className='mt-3 mx-3 pr-[10px]'>{card.buttonLabel} <ChevronRightIcon className='w-4 h-4' /></Button>

                </div>
              </div>
            ))}
        </div>
      )}

    </div>
  )
}

const DIENSTEN = {
  title: {
    subheading: "Welkom bij Massive Online Marketing",
    heading: "Marketingoplossingen voor uw onderneming",
    paragraph: "Wij bieden een divers scala aan digitale marketingdiensten, elk ontworpen om uw merk te versterken, uw bereik te vergroten en uw bedrijf vooruit te helpen in het digitale tijdperk.",
  },
  cards: [
    {
      image: '/home/diensten-card-image-background.png',
      icon: <ComputerDesktopIcon className='w-5 h-5' />,
      subHeading: 'Zakelijke Website',
      heading: 'Website Ontwikkeling',
      paragraph: 'Maak indruk met onze op maat gemaakte websites. Van responsieve ontwerpen tot geavanceerde functionaliteiten, wij bouwen websites die niet alleen mooi zijn, maar ook presteren.',
      buttonLabel: 'Ontdek onze Dienst',
    },
    {
      image: '/home/diensten-card-image-background.png',
      icon: <AcademicCapIcon className='w-5 h-5' />,
      subHeading: 'Webshop',
      heading: 'eCommerce-oplossingen',
      paragraph: 'Verander bezoekers in kopers met onze geoptimaliseerde eCommerce-platforms. Wij creëren gebruikersvriendelijke webshops die de verkoop stimuleren en klantloyaliteit opbouwen.',
      buttonLabel: 'Ontdek onze Dienst',
    },
    {
      image: '/home/diensten-card-image-background.png',
      icon: <MagnifyingGlassIcon className='w-5 h-5' />,
      subHeading: 'SEO',
      heading: 'Zoekmachineoptimalisatie',
      paragraph: 'Verhoog uw online zichtbaarheid met onze strategische SEO-diensten. Wij optimaliseren uw website voor hogere rankings en meer organisch verkeer.',
      buttonLabel: 'Ontdek onze Dienst',
    },
    {
      image: '/home/diensten-card-image-background.png',
      icon: <AcademicCapIcon className='w-5 h-5' />,
      subHeading: 'SEA',
      heading: 'Zoekmachineadverteren (SEA)',
      paragraph: 'Bereik uw doelgroep effectief met onze gerichte advertentiestrategieën. Van Google Ads tot sociale media campagnes, wij helpen u om zichtbaar te zijn waar uw klanten zijn.',
      buttonLabel: 'Ontdek onze Dienst',
    },
    {
      image: '/home/diensten-card-image-background.png',
      icon: <ComputerDesktopIcon className='w-5 h-5' />,
      subHeading: 'Zakelijke Website',
      heading: 'Content Management Systemen (CMS)',
      paragraph: 'Neem de controle over uw content met onze krachtige CMS-oplossingen. Wij zorgen voor gebruiksvriendelijke systemen die u volledige controle geven over uw websitecontent',
      buttonLabel: 'Ontdek onze Dienst',
    },
    {
      image: '/home/diensten-card-image-background.png',
      icon: <AcademicCapIcon className='w-5 h-5' />,
      subHeading: 'Webshop',
      heading: 'Digitale Strategieontwikkeling',
      paragraph: '"Laat uw bedrijf groeien met onze doordachte digitale strategieën. Wij helpen u bij het bepalen van doelen, het identificeren van kansen en het implementeren van effectieve digitale plannen.',
      buttonLabel: 'Ontdek onze Dienst',
    }

  ]
}