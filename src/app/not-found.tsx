import Link from 'next/link'

import ModalFullScreen from "@/features/modal/FullScreenModal";
import { MultiStepContactForm } from "@/features/contact-form/multistep/contact-form";
import { Navbar } from '@/components/partials/Navbar';
import { NotFoundBackground } from './_assets';

export default function NotFound() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <div className="relative min-h-[1000px] min-w-0 max-w-2xl flex flex-col px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16 mt-12">
        <NotFoundBackground className="absolute top-0 left-0 w-full h-full -z-20" />

        <div className="flex h-full flex-col items-center justify-center text-center mt-auto">
          <h1 className="mt-3 font-display text-3xl tracking-tight text-slate-900 dark:text-white">
            Pagina nog niet beschikbaar
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Het spijt ons, maar deze pagina is nog niet beschikbaar.
          </p>
          <Link
            href="/"
            className="mt-8 text-base leading-6 font-semibold text-slate-600"
          >
            Ga terug naar de homepagina
          </Link>
          <p className='text-base leading-6  text-slate-600 p-2'>of</p>
          {/* <GeneralMultiStepContactForm buttonText={'Neem Contact op'} buttonStyles='w-full md:w-fit gradient-primary-css px-6 py-3 rounded-lg justify-center flex    text-base leading-6 font-semibold text-secondary-50' /> */}

          <ModalFullScreen buttonText='Neem Contact op' className=' w-full md:w-fit' animationDuration={1000} animationIn='element' animationOut='element-out'>
            <MultiStepContactForm />
          </ModalFullScreen>

        </div>
      </div>
    </main>
  )
}


