import { Text } from '@/components/global/text'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import moneybag from '../../../public/home/Money Bag.svg'
import line from '../../../public/home/Line 1.svg'
import peopleImg from '../../../public/home/IMG_2857 1.svg'
import { CustomImage } from '@/components/global/image'
import { MaxScreenView } from '@/components/global/max-screen'

const InfoContainer: React.FC = () => (
  <div className='flex flex-col gap-[24px] relative justify-between ps-[2.5rem] lg:order-last order-1'>
    <div className='flex flex-col gap-[28px]'>
      <Text style='font-bold md:text-[45px] text-[25px]' as='h1'>
        Who are we
      </Text>
      <Text style='md:text-[20px] text-[14px] font-light leading-[120%] opacity-75' as='h2'>
        Born from the vibrant startup ecosystem of Abuja, we recognized the need
        for a consistent, high-quality networking platform where founders,
        innovators, and tech enthusiasts could connect, share ideas, and foster
        collaboration.
      </Text>
      <div className='flex md:flex-row flex-col md:gap-[24px] gap-[12px] w-fit'>
        <Button className='ms-auto flex items-center justify-center text-white border border-[#A649FF] bg-[#A649FF] rounded-[99px] lg:h-[48px] h-[48px] w-[180px] lg:text-[16px] text-[14px] font-[400]'>
          Register <ArrowRight className='text-white w-4' />
        </Button>
        <Button className='ms-auto flex items-center justify-center text-[#A649FF] border border-[#A649FF] bg-base_white rounded-[99px] lg:h-[48px] h-[48px] w-[180px] lg:text-[16px] text-[14px] font-[400]'>
          Donate <CustomImage src={moneybag} style='w-[22px] h-[22px]' />
        </Button>
      </div>
    </div>
    <Text style='font-[600] md:text-[16px] text-[14px]' as='h5'>
      Founder's Friday is more than just a meetup — it's a movement.
    </Text>
    <CustomImage src={line} style=' absolute md:top-[2.1rem] top-[1.5rem] bottom-[0.5rem] left-0 w-[2.5rem]'/>
  </div>
)

export const WhoAreWe: React.FC = () => (
  <MaxScreenView style='relative grid lg:grid-cols-2 grid-cols-1 md:gap-10 gap-4 md:px-[3rem] px-4 bg-base_white z-[900] xl:mt-[-4rem] mt-0'>
    <CustomImage src={peopleImg} style='md:h-[490px] h-[240px] lg:order-1 order-last'/>
    <InfoContainer />
  </MaxScreenView>
)
