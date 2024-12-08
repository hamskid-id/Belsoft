import { CustomImage } from '@/components/global/image'
import { Text } from '@/components/global/text'
import { Button } from '@/components/ui/button'
import rightArrow from '../../../public/right_arrow.svg'
import frame19 from '../../../public/home/Frame 19.svg'
import ellipse3 from '../../../public/home/Ellipse 3.svg'
import ellipse1 from '../../../public/home/Ellipse 1.svg'
import ellipse2 from '../../../public/home/Ellipse 2.svg'
import ellipse4 from '../../../public/home/Ellipse 4.svg'
import ellipse5 from '../../../public/home/Ellipse 5.svg'
import group from '../../../public/home/Group 1.svg'
import { MaxScreenView } from '@/components/global/max-screen'

const InfoContainer: React.FC = () => (
  <div className='pb-8 flex flex-col md:ps-4 ps-0 xl:w-[60%] w-full bg-base_white z-[900] xl:z-[-1] xl:items-start items-center xl:justify-start justify-center'>
    <Text as='h6' style=' font-[600] text-[14px] xl:text-start text-center'>
      Join our premier monthly meetup for startup founders and tech visionaries
    </Text>
    <Text
      as='h1'
      style='font-[600] md:text-[40px] text-[25px] text-deep_purple mb-4 xl:text-start text-center'
    >
      Connect, Collaborate, Innovate!
    </Text>
    <Text
      as='h3'
      style='mb-6 md:text-[20px] text-[14px] xl:text-start text-center'
    >
      {` Every last Friday of the month, we bring together the brightest minds in
      our local tech ecosystem. Whether you're a seasoned entrepreneur or just
      starting your journey, Founder's Friday is your launchpad for new ideas,
      valuable connections, and game-changing opportunities.`}
    </Text>
    <Button className='mb-2 w-fit flex items-center text-purple border border-purple bg-base_white justify-center rounded-[99px] xl:h-[48px] h-[44px] px-3 xl:text-[16px] text-[14px] font-[400]'>
      Register For Our Next Event{' '}
      <CustomImage src={rightArrow} style='w-[24px] h-[24px]' />
    </Button>
    <Text
      as='h6'
      style='mb-[54px] text-[16px] xl:text-start text-center text-purple'
    >
      Join Us for our next meetup on the 26th of July 2024
    </Text>
    <div className='flex gap-3 items-center mb-2'>
      {[ellipse3, ellipse1, ellipse2, ellipse4, ellipse5].map(
        (social, index) => (
          <CustomImage
            key={index}
            src={social.src}
            style='w-[50.65px] h-[54px]'
          />
        )
      )}
    </div>
    <CustomImage src={frame19} style='w-[160px] h-[34px] cursor-pointer' />
  </div>
)

const ImagesPlaceHolder: React.FC = () => (
  <CustomImage
    src={group}
    imgStyle='xl:object-contain sm:object-cover xl:object-center object-right xl:block hidden'
    style='xl:w-[932px] w-full xl:h-full h-[435px] md:[935px] lg:h-[1035px] xl:absolute relative top-[-2rem] bottom-0 right-0 xl:block hidden'
  />
)

export const Hero = () => (
  <MaxScreenView style='relative flex xl:flex-row flex-col gap-[12px] w-full xl:px-[4rem] py-[5rem] md:pt-[5rem] pt-[2rem] xl:pb-[5rem] pb-0 md:px-[2.5rem] px-4'>
    <InfoContainer />
    <ImagesPlaceHolder />
  </MaxScreenView>
)
