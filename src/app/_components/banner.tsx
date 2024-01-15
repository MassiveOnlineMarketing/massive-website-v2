import { Button } from '@/components/ui/button'
import { Heading, Paragraph } from '@/components/ui/typography/typography'
import container, { constants, styles } from '@/styles/styles'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import { BannerSvg } from '../_assets'

export const Banner = () => {
  return (
    <div className={`relative ${container.maxWidth}`}>
      <div className={`relative overflow-hidden  ${constants.glassFill} shadow-custom-lg rounded-[20px] flex flex-row  `}>
        <div className='absolute bg-gradient-to-l from-[#FFCFA3] from--4.42% via-[#C176FC] via-14.47% via-[#9076FC] via-54.38% to-[#C6B8FF] to-85.5% h-2 top-0 w-full'></div>
        
        <div className=' p-6 md:pt-12 md:pl-8 md:pb-8 max-w-[650px]'>
          <Heading level='h3' size='3xl' className='font-semibold' >{BANNER.heading}</Heading>
          <Paragraph size='base' className='mt-4' >{BANNER.paragraaf}</Paragraph>
          <Button size='sm' variant='glass' className='mt-6 pr-[10px]'>{BANNER.buttonLabel} <ArrowLongRightIcon className='w-4 h-4'/></Button>
        </div>

        <Image src={'/home/massive-isometric-image-mini-modal-444x257-XL.jpg'} width={447} height={295} alt='banner image' className='lg:block ml-auto mt-auto hidden'/>
      </div>

        <BannerSvg className='md:block absolute right-[-29px] bottom-[-39px] hidden' />
    </div>
  )
}


const BANNER = {
  heading: "Ontketen het Digitaal Potentieel van Uw Onderneming",
  paragraaf: "Plan een kosteloos strategisch gesprek in met onze experts en ontdek de concrete stappen om jouw online aanwezigheid te versterken.",
  buttonLabel: "Ontdek onze Diensten"
}