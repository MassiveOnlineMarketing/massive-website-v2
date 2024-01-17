import Link from 'next/link'

import ModalFullScreen from "@/features/modal/FullScreenModal";
import { MultiStepContactForm } from "@/features/contact-form/multistep/contact-form";
import { Navbar } from '@/components/partials/Navbar';

export default function NotFound() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16 mt-12">
        <div className="flex h-full flex-col items-center justify-center text-center">
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
          <p className='text-base leading-6 font-semibold text-slate-600 p-2'>of</p>
          {/* <GeneralMultiStepContactForm buttonText={'Neem Contact op'} buttonStyles='w-full md:w-fit gradient-primary-css px-6 py-3 rounded-lg justify-center flex    text-base leading-6 font-semibold text-secondary-50' /> */}

          <ModalFullScreen buttonText='Neem Contact op' className='mt-6 w-full md:w-fit' animationDuration={1000} animationIn='element' animationOut='element-out'>
            <MultiStepContactForm />
          </ModalFullScreen>

        </div>
      </div>
    </main>
  )
}


