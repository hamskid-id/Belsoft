'use client'

import { MaxScreenView } from '@/components/global/max-screen'
import { Text } from '@/components/global/text'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import next from '../../../public/carousel next.svg'
import back from '../../../public/carousel back.svg'
import ellipse309 from '../../../public/Ellipse 309.svg'
import { CustomImage } from '@/components/global/image'
import React from 'react'
import { IPerson } from '@/lib/types/global'

const Person: React.FC<IPerson> = ({ img, title, description }) => {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <div className='rounded-full p-3 border border-deep-purple mb-2'>
        <CustomImage
          src={img}
          style='w-[145px] h-[145px]'
          imgStyle='rounded-full'
        />
      </div>
      <Text style='font-bold md:text-[24px] text-[20px] text-center' as='h1'>
        {title}
      </Text>
      <Text style='font-light md:text-[18px] text-[14px] text-center' as='h2'>
        {description}
      </Text>
    </div>
  )
}

const ReviewStories: React.FC = () => {
  const swiperRef = React.useRef<any>(null)
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex items-center gap-4 ms-auto justify-end md:mb-4 mb-0'>
        <CustomImage
          src={back}
          clickFunc={() =>
            swiperRef.current !== null && swiperRef.current.swiper.slidePrev()
          }
          style='md:w-[60px] w-[40px] h-[60px] cursor-pointer'
        />
        <CustomImage
          clickFunc={() =>
            swiperRef.current !== null && swiperRef.current.swiper.slideNext()
          }
          src={next}
          style='md:w-[60px] w-[40px] h-[60px] cursor-pointer'
        />
      </div>
      <div className='relative'>
        <Swiper
          ref={swiperRef}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 2
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 2
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 15
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          modules={[Autoplay]}
          className='mySwiper'
        >
          {[
            {
              title: 'Mr Belba Ngoy',
              src: ellipse309,
              desc: 'Always a remarkable experience for my team and myself'
            },
            {
              title: 'Mr Belba2 Ngoy',
              src: ellipse309,
              desc: 'Always a remarkable experience for my team and myself'
            },
            {
              title: 'Mr Belba3 Ngoy',
              src: ellipse309,
              desc: 'Always a remarkable experience for my team and myself'
            }
          ].map((info, index) => (
            <SwiperSlide key={index}>
              <Person
                img={info.src}
                title={info.title}
                description={info.desc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export const Review: React.FC = () => (
  <MaxScreenView style='md:py-[5rem] py-[3rem] md:px-[3rem] px-4 items-center justify-center flex flex-col md:gap-[12px] gap-3 justify-center'>
    <Text style='font-bold md:text-[35px] text-[25px] text-center' as='h1'>
      What Do Our Attendees Have To Say?
    </Text>
    <Text
      as='h2'
      style='text-[16px] text-center text-[grey] opacity-75 md:mb-4 mb-0'
    >
      Well See For Yourself!
    </Text>
    <ReviewStories />
  </MaxScreenView>
)
