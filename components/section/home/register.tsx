'use client'

import { MaxScreenView } from '@/components/global/max-screen'
import { Text } from '@/components/global/text'
import line from '../../../public/registerline.svg'
import people from '../../../public/Frame 610.svg'
import editors from '../../../public/editors.svg'
import { CustomImage } from '@/components/global/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Editors: React.FC = () => (
  <div className='flex md:flex-row flex-col gap-[27px] md:justify-start justify-center items-center w-full md:px-[4rem] px-4'>
    <CustomImage
      src={editors}
      style='md:h-[480px] h-[290px] md:width-[50%] w-full'
    />
    <div className='flex flex-col md:width-[50%] w-full gap-[24px]'>
      <Text
        style='font-[600] md:text-[24px] text-[20px] lg:w-[85%] w-full xl:text-start text-center'
        as='h2'
      >
        {`At Founder’s Friday, Every Friday Is a Learning Experience!`}
      </Text>
      <Text as='h6' style=' font-[600] text-[17px] xl:text-start text-center'>
        Join us in our mission to transform ideas into impact and shape the
        future of Nigeria’s startup landscape.
      </Text>
      <Button className='mb-8 m-auto md:m-0 flex items-center justify-center text-white border border-white bg-[#A649FF] rounded-full lg:h-[48px] h-[48px] w-[180px] lg:text-[16px] text-[14px] font-[400]'>
        Register <ArrowRight className='text-white w-4' />
      </Button>
    </div>
  </div>
)

export const Register: React.FC = () => (
  <MaxScreenView style='md:py-[5rem] py-[3rem] items-center justify-center flex flex-col md:gap-[12px] gap-6'>
    <div className='flex flex-col md:gap-[12px] gap-6 items-center justify-center w-full lg:px-0 md:px-[4rem] px-4'>
      <Text style='font-bold md:text-[35px] text-[25px] text-center' as='h1'>
        Register And Be Part of Our Community
      </Text>
      <Text
        as='h2'
        style='text-[16px] text-center text-[grey] opacity-75 mb-4 lg:w-[52%] w-full'
      >
        {`Join our community of over 1000+ founders, developers, and tech junkies in general. Be inspired by people who live to inspire!`}
      </Text>
      <div className='relative lg:block hidden pb-[3rem] w-full'>
        <CustomImage src={people} style='h-[248px] w-[95%] z-[900] m-auto' />
        <CustomImage
          src={line}
          style='top-0 bottom-0 left-0 right-0 absolute'
        />
      </div>
      <Button className='mb-12 flex items-center justify-center text-deep_purple border border-deep_purple bg-transparent rounded-full lg:h-[48px] h-[48px] w-[200px] lg:text-[16px] text-[14px] font-[400]'>
        Register Now <ArrowRight className='text-deep_purple w-12' />
      </Button>
    </div>
    <Editors />
  </MaxScreenView>
)
