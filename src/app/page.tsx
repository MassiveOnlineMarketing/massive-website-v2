import Image from "next/image";

import Title from "@/components/ui/typography/title";
import { Heading, Paragraph } from "@/components/ui/typography/typography";

import Hero from "./_components/hero";
import { Banner } from "./_components/banner";
import { Navbar } from '@/components/partials/Navbar'
import SectionOne from "./_components/section-one";
import { Diensten } from "./_components/diensten";
import { GradientWave } from "@/assets/backgrounds";
import { Usps } from "./_components/usps";
import SectionGesprek from "./_components/section-gesprek";
import ToekomstVisie from "./_components/toekomst-visie";
import WaarWijVoorStaan from "./_components/waar-wij-voor-staan";
import Faq from "./_components/faq";




export default function Home() {
  return (
    <main className="w-full">

      <div className="relative">
        <header>
          <Navbar />
        </header>
        <Hero />

        <Image src={'/home/mesh-gradient-hero-1920x1090.jpg'} width={1920} height={1090} alt='hero background gradient' className="absolute top-0 left-0 -z-20 h-full w-full mx-auto" />
      
        <div className="lg:block absolute -bottom-[145px] w-full hidden">
          <Banner  />
        </div>
      </div>

      <SectionOne />

      <div className="relative">
        <Diensten />

        <GradientWave className='absolute top-1/4 left-0 -z-10' />
      </div>

      <Usps />

      <SectionGesprek />

      <ToekomstVisie />

      <WaarWijVoorStaan />

      <Faq />
      
    </main>
  )
}

