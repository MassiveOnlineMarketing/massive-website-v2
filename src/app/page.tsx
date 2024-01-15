import Image from "next/image";

import Title from "@/components/ui/typography/title";
import { Heading, Paragraph } from "@/components/ui/typography/typography";

import Hero from "./_components/hero";
import { Banner } from "./_components/banner";
import { Navbar } from '@/components/partials/Navbar'
import SectionOne from "./_components/section-one";
import { Diensten } from "./_components/diensten";
import { GradientWave, GridBackground } from "@/assets/backgrounds";
import { Usps } from "./_components/usps";
import SectionGesprek from "./_components/section-gesprek";
import ToekomstVisie from "./_components/toekomst-visie";
import WaarWijVoorStaan from "./_components/waar-wij-voor-staan";
import Faq from "./_components/faq";
import container from "@/styles/styles";




export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* verticale lijnen */}
      <div className="absolute w-full h-full top-0 left-0">
        <div className="relative h-full w-full flex items-center justify-center">
          <div className={`absolute h-full w-full border-l-[1px] border-r-[1px] border-gray-200  -z-10 max-w-[1300px]`}>
           </div>
        </div>
      </div>

      <div className="relative">
        <GridBackground className='absolute top-0 left-0 -z-10' />

        <header>
          <Navbar />
        </header>
        <Hero />

        <Image src={'/home/mesh-gradient-hero-1920x1090.jpg'} width={1920} height={1090} alt='hero background gradient' className="absolute top-0 left-0 -z-20 h-full w-full mx-auto" />

        <div className="absolute -bottom-[145px] w-full ">
          <Banner />
        </div>
      </div>

      <SectionOne />

      <div className="relative">
        <Diensten />

        <GradientWave className='absolute bottom-0 md:top-1/4 left-0 -z-10' />
      </div>

      <Usps />

      <SectionGesprek />

      <ToekomstVisie />

      <WaarWijVoorStaan />

      <Faq />

    </main>
  )
}

