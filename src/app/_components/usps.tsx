import Title from '@/components/ui/typography/title'
import { Heading, Paragraph, SubHeading } from '@/components/ui/typography/typography'
import container from '@/styles/styles'
import React from 'react'
import { UspsOneSvg } from '../_assets'

export const Usps = () => {
  return (
    <div className={` mt-[130px]  px-12 py-24 rounded-[20px] ${container.maxWidth} shadow-inner bg-[url('/home/gradient-background-usps.jpg')] bg-cover `}>
      <Title className='max-w-[750px] mx-auto text-center items-center'>
        <SubHeading level='h2' size='sm' colorScheme='gradient-primary' className='pt-[6px]'>{USPS.title.subHeading}</SubHeading>	
        <Heading level='h3' size='2xl'>{USPS.title.heading}</Heading>
      </Title>
      <div className='mt-16 grid sm:grid-cols-2 xl:grid-cols-4 gap-8'>
        {USPS.cards.map((card) => (
          <div key={card.heading} className='flex flex-col '>
            {card.icon}
            <Heading level='h4' size='lg' className='font-medium mt-4'>{card.heading}</Heading>
            <Paragraph className='text-gray-700 mt-[8px]'>{card.paragraph}</Paragraph>
          </div>
        ))}
      </div>

    </div>
  )
}

const USPS = {
  title: {
    subHeading: "Waarom Ondernemers voor Ons Kiezen",
    heading: "Zet uw zakelijke visie om in tastbare sucessen met strategieën die ondernemerschap en resultaatgerichtheid combineren"
  },
  cards: [
    {
      icon: <UspsOneSvg />,
      heading: "Open en Transparant",
      paragraph: "Wat u ziet, is wat u krijgt. Onze transparantie in elke stap is de sleutel tot succesvolle samenwerkingen.",
    },
    {
      icon: <UspsOneSvg />,
      heading: "Creatieve Oplossingen",
      paragraph: "Wij breken de conventies om innovatieve, op maat gemaakte oplossingen te leveren die uw merk laten opvallen.",
    },
    {
      icon: <UspsOneSvg />,
      heading: "Toewijding aan Ondernemrssucces",
      paragraph: "Als ondernemers begrijpen we uw uitdagingen. Uw groei is ons primair doel.",
    },
    {
      icon: <UspsOneSvg />,
      heading: "Diversiteit en Inclusiviteit",
      paragraph: "Diversiteit in ons team verrijkt onze creativiteit en strategische benaderingen, waardoor we alle perspectieven kunnen omarmen.",
    },
  ]
}


export default Usps
