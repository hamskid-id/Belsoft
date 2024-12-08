'use client'

import Link from 'next/link'
import { usePathname} from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavRoutes } from '@/lib/constants/top-nav'
import { MaxScreenView } from '../global/max-screen'
import brand from '../../public/top_brand.svg'
import { CustomImage } from '../global/image'
import { MobileNav } from './mobile-nav'
import { RegisterButton } from '../global/registerBtn'

export const TopNav = () => {
  const currentPath = usePathname()
  const NavLinks: React.FC = () => (
    <ul className='lg:flex hidden lg:flex-row flex-col lg:flex-row gap-[20px] flex-col w-full items-center justify-between'>
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
  )

  return (
    <header>
      <MaxScreenView style='shadow-sm lg:px-[4rem] lg:px-[2.5rem] px-2 lg:py-1 py-2 fixed top-0 left-0 right-0 z-[1000] bg-base_white flex lg:flex-row flex-col justify-between lg:items-center items-start lg:gap-[12px] gap-0'>
        <CustomImage
          src={brand}
          priority={true}
          imgStyle="lg:object-cover object-contain"
          style={'lg:w-[280px] w-[165px] h-[55.54px] lg:h-[65.54px] cursor-pointer'}
        />
        <div className='flex lg:gap-[56px] gap-0 items-center lg:justify-end justify-between lg:w-auto w-full lg:py-[1rem] lg:px-[1rem] py-[0.5rem] px-0 h-[85%]'>
          <nav>
            <NavLinks />
          </nav>
          <MobileNav/>
          <RegisterButton/>
        </div>
      </MaxScreenView>
    </header>
  )
}
