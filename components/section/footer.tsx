'use client'

import { CustomImage } from '../global/image'
import brand from '../../public/footer_brand.svg'
import rightArrow from '../../public/right_arrow.svg'
import { MaxScreenView } from '../global/max-screen'
import { Text } from '../global/text'
import { Button } from '../ui/button'
import { socialLinks } from '@/lib/constants/footer'
import { NavRoutes } from '@/lib/constants/top-nav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Partner: React.FC = () => (
  <div className='flex flex-col justify-center items-center gap-6'>
    <Text
      style='font-bold md:text-[30px] text-[23px] flex flex-col md:w-[70%] w-full text-center'
      as='h1'
    >
      {`Want To Be A Part Of Abuja’s Biggest Tech Community?`}
    </Text>
    <Button className='mb-[64px] flex items-center text-purple border border-purple bg-base_white justify-center rounded-[99px] lg:h-[48px] h-[44px] px-3 lg:text-[16px] text-[14px] font-[400]'>
      Register For Our Next Event{' '}
      <CustomImage src={rightArrow} style='w-[24px] h-[24px]' />
    </Button>
  </div>
)

const FooterLinks: React.FC = () => {
  const currentPath = usePathname()
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between items-center gap-[24px]'>
      <div className='flex gap-3 items-center'>
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={`${social.route}`}
            target='_blank'
            className='text-none'
          >
            <CustomImage
              src={social.src}
              style='w-[30.65px] h-[34px] cursor-pointer'
            />
          </Link>
        ))}
      </div>
      <ul className='flex md:flex-row flex-col gap-[16px] items-center'>
        {NavRoutes.map((links, index) => (
          <li
            key={index}
            className={cn(
              'text-[16px] font-medium text-black py-1 px-1 hover:text-purple transition-colors duration-500',
              index === 0 &&
                currentPath === links.route &&
                'border-purple text-purple font-[400]',

              index !== 0 &&
                currentPath.includes(links.route) &&
                'border-purple text-purple font-[400]'
            )}
          >
            <Link href={links.route} className={'text-none'}>
              {links.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Footer = () => {
  return (
    <footer>
      <MaxScreenView style='lg:px-[4rem] md:px-[2.5rem] px-4 py-5 flex flex-col mt-auto border border-top'>
        <CustomImage
          src={brand}
          priority={true}
          style={'w-[160px] md:h-[65.54px] h-[55.54px] cursor-pointer mb-[48px]'}
        />
        <Partner />
        <hr className='bg-primary_400 text-primary_400 mb-4'></hr>
        <FooterLinks />
      </MaxScreenView>
    </footer>
  )
}
