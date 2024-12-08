import { Text } from '@/components/global/text'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import foundersImg from '../../../public/home/Frame 714.svg'
import line from '../../../public/home/lineThrough.svg'
import { CustomImage } from '@/components/global/image'
import { MaxScreenView } from '@/components/global/max-screen'

const InfoContainer: React.FC = () => (
  <div className='flex flex-col lg:items-start items-center lg:justify-start justify-center gap-[12px] relative md:width-[70%] w-full'>
    <Text style='font-bold md:text-[25px] text-[17px] text-deep_purple lg:text-start text-center' as='h3'>
      Founders Friday
    </Text>
    <Text style='font-bold md:text-[40px] text-[25px] leading-[125%] mb-4 lg:text-start text-center md:w-[75%] w-auto' as='h1'>
      What Happens At Founders Friday
    </Text>
    <Text
      style='md:text-[20px] text-[14px] font-light leading-[120%] opacity-75 mb-8 lg:text-start text-center'
      as='h2'
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum
      felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus.
      Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut
      ante quis quam lobortis consequat eu id turpis. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    </Text>
    <Button className='flex items-center justify-center text-white border border-[#A649FF] bg-[#A649FF] rounded-[10px] lg:h-[48px] h-[48px] w-[180px] lg:text-[16px] text-[14px] font-[400]'>
      Learn More <ArrowRight className='text-white w-4' />
    </Button>
  </div>
)

export const WhatHappens: React.FC = () => (
  <MaxScreenView style='lg:pt-[20rem] pt-8 pb-8 lg:pb-[9rem] relative flex lg:flex-row flex-col md:gap-10 gap-6 md:px-[3rem] px-4 bg-base_white z-[900]'>
    <InfoContainer />
    <CustomImage src={foundersImg} style='md:h-[598px] h-[340px] md:width-[30%] w-full z-[900]' />
    <CustomImage src={line} style='absolute top-0 bottom-0 left-[-3rem] right-0 xl:block hidden' />
  </MaxScreenView>
)
