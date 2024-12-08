'use client'

import { MaxScreenView } from '@/components/global/max-screen'
import { RevealAnimation } from '@/components/global/reveal'
import { Text } from '@/components/global/text'
import { faqs } from '@/lib/constants/home'
import { IAccordium } from '@/lib/types/global'
import { cn } from '@/lib/utils'
import { Minus, Plus } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'

const Accordium: React.FC<IAccordium> = ({ title, info }: IAccordium) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const serviceAccordium = useRef<HTMLDivElement>(null)

  const handleToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState)
    if(serviceAccordium.current !== null){
        serviceAccordium.current.classList.toggle('active')
      }
  }, [])

  return (
    <RevealAnimation style={'p-6 w-full border-b-[0.5px] border-[grey]'}>
      <div
        onClick={handleToggle}
        className='flex md:items-center items-start justify-between gap-4 cursor-pointer'
      >
        <div className='flex md:flex-row flex-col md:gap-4 md:gap-[30px] gap-2 items-center'>
          <div className='flex md:gap-4 gap-2 items-center me-auto'>
            <div className='w-4 h-4 bg-deep_purple rounded-full'></div>
            <Text
              style={
                'md:text-[20px] md:leading-[28px] text-[16px] md:leading-[22.4px] font-[500]'
              }
            >
              {title}
            </Text>
          </div>
          <div
            ref={serviceAccordium}
            className='service-accord md:w-[70%] w-auto'
          >
            <Text style='md:text-[16px] md:leading-[24px] text-[12px] md:leading-[19px] text-black'>
              {info}
            </Text>
          </div>
        </div>
        <div>
          {!isOpen ? (
            <Plus
              className={cn(
                'rotate-0 transform transition-transform duration-300 w-[22px] h-[22px]',
                isOpen && 'rotate-180'
              )}
            />
          ) : (
            <Minus
              className={cn(
                'rotate-0 transform transition-transform duration-300 w-[22px] h-[22px]',
                !isOpen && 'rotate-180'
              )}
            />
          )}
        </div>
      </div>
    </RevealAnimation>
  )
}

export const Offers: React.FC = () => (
  <MaxScreenView style='md:px-[3rem] px-4 md:py-[6rem] py-[3rem] items-center justify-center flex flex-col md:gap-[12px] gap-6'>
    <Text style='font-bold md:text-[35px] text-[25px] text-center' as='h1'>
      What We Offer
    </Text>
    <div className='flex flex-col w-full'>
      {faqs.map((faq, index) => (
        <Accordium key={index} {...faq} />
      ))}
    </div>
  </MaxScreenView>
)
