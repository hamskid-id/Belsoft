'use client'

import { MaxScreenView } from '@/components/global/max-screen'
import { RevealAnimation } from '@/components/global/reveal'
import { Text } from '@/components/global/text'
import { IAccordium } from '@/lib/types/global'
import { cn } from '@/lib/utils'
import { ChevronUp } from 'lucide-react'
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
    <RevealAnimation>
      <div
        onClick={handleToggle}
        className='flex flex-col gap-4 cursor-pointer justify-between md:w-auto w-full'
      >
        <div className='flex items-center justify-between'>
          <Text
            style={
              'md:text-[18px] md:leading-[24px] text-[14px] md:leading-[22.4px] font-[500] text-purple'
            }
          >
            {title}
          </Text>
          <div>
            <ChevronUp
              className={cn(
                'rotate-0 transform transition-transform duration-300 w-[22px] h-[22px] text-[grey]',
                !isOpen && 'rotate-180'
              )}
            />
          </div>
        </div>
        <div
          ref={serviceAccordium}
          className='service-accord md:w-[70%] w-auto'
        >
          <Text style='md:text-[14px] md:leading-[24px] text-[12px] md:leading-[19px] text-black'>
            {info}
          </Text>
        </div>
      </div>
    </RevealAnimation>
  )
}

export const Faqs: React.FC = () => (
  <MaxScreenView style='md:px-[3rem] px-4 md:pt-8 pt-4 md:pb-[4rem] pb-[3rem] flex flex-col md:justify-auto justify-center md:gap-[12px] gap-6'>
    <Text style='font-bold md:text-[35px] text-[25px] mb-2 md:text-start text-center' as='h1'>
      FAQs
    </Text>
    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-[24px] gap-x-4 gap-y-4 md:gap-y-4 md:m-auto m-0'>
      {[
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adi elit.',
          info: 'Lorem ipsum dolor sit amet, consectetur adi elit.'
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adi elit.',
          info: 'Lorem ipsum dolor sit amet, consectetur adi elit.'
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adi elit.',
          info: 'Lorem ipsum dolor sit amet, consectetur adi elit.'
        },
        {
          title: 'Lorem ipsum dolor sit amet, consectetur adi elit.',
          info: 'Lorem ipsum dolor sit amet, consectetur adi elit.'
        }
      ].map((faq, index) => (
        <Accordium key={index} {...faq} />
      ))}
    </div>
  </MaxScreenView>
)
