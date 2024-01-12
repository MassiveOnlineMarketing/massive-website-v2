import container from '@/styles/styles'
import React from 'react'
import { GridBackground } from '@/assets/backgrounds'


export const Navbar = () => {
  return (
    <div className= {`relative h-[86px] p-6  ${container.maxWidth} `}>
      <GridBackground className='absolute top-0 left-0 -z-10' />
      Navbar
    </div>
  )
}
