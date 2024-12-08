'use client'

import { Text } from '@/components/global/text'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import foundersImg from '../../../public/brand.png'
import { CustomImage } from '@/components/global/image'
import { MaxScreenView } from '@/components/global/max-screen'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Mousewheel } from 'swiper/modules'
import React from 'react'

const SwiperContainer: React.FC = () => {
  const swiperRef = React.useRef<any>(null) // eslint-disable-line @typescript-eslint/no-explicit-any
  return (
    <div className='relative comingswiper'>
      <Swiper
        ref={swiperRef}
        direction='vertical'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        slidesPerView={'auto'}
        autoHeight={true}
        mousewheel={true}
        speed={1000}
        modules={[Autoplay, Mousewheel]}
        className='mySwiper'
      >
        {['Kaduna', 'Abuja', 'Lagos', 'Ibadan'].map((info, index) => (
          <SwiperSlide key={index}>
            <Text
              key={index}
              style='font-bold md:text-[65px] text-[#A649FF] text-[35px] leading-[125%] mb-4 lg:text-start text-center md:w-[75%] w-auto'
              as='h1'
            >
              {info}
            </Text>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const InfoContainer: React.FC = () => (
  <div className='text-white flex flex-col lg:items-start items-center lg:justify-start justify-center gap-[7px] relative lg:w-[50%] w-full'>
    <Text
      style='font-bold md:text-[25px] text-[17px] lg:text-start text-center'
      as='h3'
    >
      Founders Friday is coming to
    </Text>
    <SwiperContainer />
    <Text
      style='md:text-[20px] text-[14px] font-light leading-[120%] opacity-75 mb-4 lg:text-start text-center'
      as='h2'
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum
      felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus.
      Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut
      ante quis quam lobortis consequat eu id turpis. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    </Text>
    <Button className='flex items-center justify-center text-[#A649FF] border border-[#A649FF] bg-transparent rounded-full lg:h-[48px] h-[48px] w-[180px] lg:text-[16px] text-[14px] font-[400]'>
      Register <ArrowRight className='text-[#A649FF] w-4' />
    </Button>
  </div>
)

export const Coming: React.FC = () => (
  <section className='coming_bg'>
    <MaxScreenView style='md:py-[5rem] py-[3rem] justify-between flex lg:flex-row items-center flex-col md:gap-[32px] gap-6 md:px-[4rem] px-4 z-[900]'>
      <InfoContainer />
      <CustomImage
        src={foundersImg}
        style='md:h-[350px] h-[250px] w-[250px] md:w-[400px] z-[900]'
      />
    </MaxScreenView>
  </section>
)
