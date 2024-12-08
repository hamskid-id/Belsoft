import facebook from '../../public/facebook.svg'
import twitter from '../../public/twitter.svg'
import insta from '../../public/insta.svg'
import { StaticImageData } from 'next/legacy/image'

export const socialLinks: { src: StaticImageData; route: string }[] = [
  {
    src: facebook,
    route: '/'
  },
  {
    src: insta,
    route: '/'
  },
  {
    src: twitter,
    route: '/'
  }
]
