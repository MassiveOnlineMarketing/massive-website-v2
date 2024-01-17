import { MassiveLogoColor } from '@/assets/branding'
import { FacebookGray, InstagramGray, LinkedinGray, TwitterGray } from '@/assets/icons'
import Link from 'next/link'
import React from 'react'
import { Paragraph } from '../ui/typography/typography'

const WEBSITE_URL = process.env.WEBSITE_URL


export default function Footer() {
  return (
    <div className='relative pt-[262px] max-w-[1920px] mx-auto'>
      
      <footer
        className={`relative lg:w-[93%] mx-auto `}
        aria-labelledby='footer-heading'
      >
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        {/* <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">  ${styles.boxWidth} ${styles.horizontalCenter}*/}
        <div
          className={`relative rounded-t-4xl bg-gray-50 px-6 pt-[52px] md:px-[50px] lg:px-[104px] lg:pt-24`}
        >
          <div className='grid-flow-cols grid gap-12 md:grid-cols-2 xl:gap-8'>
            {/* <div className='gap grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 xl:order-1 xl:col-span-2 xl:mt-0 xl:gap-8'> */}
            <div className='flex flex-col justify-between gap-12  xl:gap-[160px]  '>
              <div>
                <div className='space-y-12 xl:space-y-8'>
                  <Link href={`${WEBSITE_URL}/`}>
                    <MassiveLogoColor className='w-18 h-10' aria-label='Ga naar Massive Online Marketing Home pagina' />
                  </Link>

                    {/*${styles.paragraafSmall}*/}
                    {/* <RenderText content={footerData.slogan} /> */}
                    <Paragraph size='sm' className='`max-w-[330px] text-sm font-normal leading-5 text-gray-600 '>Onze visie is om de grenzen van traditionele marketing te verleggen om samen met onze partners nieuwe hoogtes te bereiken.</Paragraph>
                </div>
              </div>

              <div>
                <div className='flex justify-center space-x-6 md:justify-normal'>
                  {footerData.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={``}
                    >
                      <span className='sr-only'>{item.name}</span>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3
                className={`text-xl font-semibold leading-7 text-gray-700`}
              >
                {footerData.diensten.title}
              </h3>
              <ul role='list' className='mt-2 space-y-2'>
                {footerData.diensten.list.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className={`text-gray-600`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div>
                <h3
                  className={`text-xl font-semibold leading-7 text-gray-700`}
                >
                  {footerData.kennisbank.title}
                </h3>
                <ul role='list' className='mt-2 space-y-2'>
                  {footerData.kennisbank.list.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className={`${styles.textBase}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3
                  className={`text-xl font-semibold leading-7 text-gray-700`}
                >
                  {footerData.documentatie.title}
                </h3>
                <ul role='list' className='mt-2 space-y-2'>
                  {footerData.documentatie.list.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className={`${styles.textBase}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3
                  className={`text-xl font-semibold leading-7 text-gray-700`}
                >
                  {footerData.handigeLinks.title}
                </h3>
                <ul role='list' className='mt-2 space-y-2'>
                  {footerData.handigeLinks.list.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className={`${styles.textBase}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
            {/* </div> */}
          </div>
          <div className=' grid grid-flow-row   gap-4 pb-4 pt-12   text-center text-xs text-gray-500 md:grid-cols-2 md:text-right'>
            <div className='flex justify-center gap-2 md:justify-start'>
              {footerData.legal.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                  {index < footerData.legal.length - 1 && <div> | </div>}
                </React.Fragment>
              ))}
            </div>

            <div className='h-[1px] w-full bg-gray-300 md:-order-1 md:col-span-2'></div>

            <p className=''>&copy; 2020 Massive - All rights reserved.</p>
          </div>
          <div className='custom-bg-gradient absolute  left-0 top-0 -z-10 h-full '></div>
        </div>
        {/*   */}
        <div
          className={`mx-4 w-full  rounded-t-4xl 2xl:w-[100%] custom-bg-gradient absolute top-0 -z-10 h-full`}
        ></div>
      </footer>
      <div
        className={`absolute left-[1.5%] top-0 -z-20 h-full w-[97%] rounded-t-4xl bg-gray-100 shadow-inner border-2 border-wite-900 `}
      ></div>
    </div>
  )
}


const footerData = {
  slogan: [
    'Onze visie is om de grenzen van traditionele marketing te verleggen om samen met onze partners nieuwe hoogtes te bereiken.',
  ],

  diensten: {
    title: 'Diensten',
    list: [
      { name: 'Website', href: '/website-laten-maken' },
      { name: 'eCommerce', href: '/webshop-laten-maken' },
      { name: 'SEO', href: '/seo' },
      { name: 'SEA', href: '/online-marketing' },
      // { name: 'CMS', href: '#' },
      { name: 'Steategie', href: '/online-strategie' },
    ],
  },

  kennisbank: {
    title: 'Kennisbank',
    list: [
      { name: 'Website', href: '#' },
      { name: 'eCommerce', href: '#' },
      { name: 'Seo', href: '#' },
    ],
  },

  documentatie: {
    title: 'Documentatie',
    list: [
      { name: 'Code Wiki', href: '#' },
      { name: 'SEO Wiki', href: '/docs' },
    ],
  },

  handigeLinks: {
    title: 'Handige Links',
    list: [
      { name: 'Over Massive', href: '#' },
      { name: 'Massive Webshop', href: '#' },
      { name: 'Blog Generator', href: '#' },
      { name: 'Persona Generator', href: '#' },
      { name: 'Vacatures', href: '#' },
    ],
  },

  legal: [
    { name: 'Privacy Policy', href: '/over-ons/privacybeleid' },
    { name: 'Cookie Policy', href: '/over-ons/cookiebeleid' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: <FacebookGray />,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: <TwitterGray />,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: <InstagramGray />,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: <LinkedinGray />,
    },
  ],
}
