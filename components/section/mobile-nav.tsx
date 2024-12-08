'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowRight, Menu } from 'lucide-react'
import { NavRoutes } from '@/lib/constants/top-nav'

export const MobileNav: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const currentPath = usePathname()

  const NavLinks: React.FC = () => (
    <ul className='flex gap-[18px] flex-col w-full items-center'>
      {NavRoutes.map((links, index) => (
        <SheetClose asChild key={index}>
          <li
            onClick={() => setOpen(false)}
            className={cn(
              'text-[16px] font-medium text-white py-1 px-1 hover:text-purple transition-colors duration-500',
              index === 0 &&
                currentPath === links.route &&
                'border-purple text-white font-[400]',

              index !== 0 &&
                currentPath.includes(links.route) &&
                'border-purple text-white font-[400]'
            )}
          >
            <Link href={links.route} className={'text-none'}>
              {links.title}
            </Link>
          </li>
        </SheetClose>
      ))}
    </ul>
  )

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu
          color='black'
          className='lg:hidden block cursor-pointer w-[22px] h-[22px]'
        />
      </SheetTrigger>
      <SheetContent className='p-0 h-[100vh] z-[1100]' side={'top'}>
        <SheetHeader className='hidden'>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className='flex flex-col m-auto justify-between h-full p-3 bg-purple'>
          <NavLinks />
            <Button onClick={() => setOpen(false)} className='ms-auto flex items-center text-purple border border-purple bg-base_white rounded-[12px] lg:h-[48px] h-[44px] w-[150px] lg:text-[16px] text-[14px] font-[400]'>
              Register <ArrowRight className='text-purple' />
            </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
