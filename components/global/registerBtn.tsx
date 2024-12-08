import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

export const RegisterButton: React.FC = () => (
  <Button className='ms-auto flex items-center justify-center text-purple border border-purple bg-base_white rounded-[12px] lg:h-[48px] h-[44px] w-[150px] lg:text-[16px] text-[14px] font-[400]'>
    Register <ArrowRight className='text-purple' />
  </Button>
)
