'use client'

import frame from '../../../public/home/Frame 682.svg'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form } from '@/components/ui/form'
import { CustomImage } from '@/components/global/image'
import { Text } from '@/components/global/text'
import { SponsorFormSchema } from '@/lib/schema'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FormInputField } from '@/components/ui/formfield'
import { MaxScreenView } from '@/components/global/max-screen'

const inputStyle = 'rounded-[12px] h-[50px] border border-[grey]'

export const Sponsor = () => {
  const form = useForm<z.infer<typeof SponsorFormSchema>>({
    resolver: zodResolver(SponsorFormSchema),
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      company: ''
    }
  })

  async function onSubmit(values: z.infer<typeof SponsorFormSchema>) {}

  return (
    <MaxScreenView style='flex flex-col md:px-[4rem] px-4 bg-base_white z-[900] md:pb-[5rem] pb-[3rem]'>
      <Text
        style='font-bold md:text-[25px] text-[17px] text-deep_purple lg:text-start text-center'
        as='h3'
      >
        Sponsor The Next Friday
      </Text>
      <Text
        style='font-bold md:text-[40px] text-[25px] leading-[125%] mb-7 lg:w-[40%] w-auto m-auto lg:text-start text-center'
        as='h1'
      >
        Why Sponsor Founders Friday?
      </Text>
      <div className='flex md:flex-row flex-col gap-[27px]'>
        <CustomImage src={frame} style='md:h-[600px] h-[290px] md:width-[50%] w-full ' />
        <div className='flex flex-col md:width-[50%] w-full mb-2'>
          <Text style='font-bold md:text-[28px] text-[20px]' as='h3'>
            How To Sponsor
          </Text>
          <Text style='md:text-[24px] text-[17px] opacity-75 italic mb-2' as='h1'>
            Ready to Make an Impact?
          </Text>
          <Text style=' md:text-[15px] text-[14px] opacity-75 mb-8' as='h3'>
            Fill out the form below or contact us at [contact email/phone
            number] to learn more about how you can sponsor the next Founders
            Friday
          </Text>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex-grow'>
              <div className={'grid md:grid-cols-2 grid-cols-1 w-full flex-col md:gap-8 gap-5'}>
                <FormInputField
                  inputStyle={inputStyle}
                  control={form.control}
                  name='name'
                  label={'Name'}
                  inputCategory='input'
                  placeholder='Full Name'
                  inputType='text'
                />
                <FormInputField
                  control={form.control}
                  name='company'
                  inputStyle={inputStyle}
                  label={'Company (optional)'}
                  placeholder='Company name'
                  inputCategory='input'
                  inputType='text'
                />
                <FormInputField
                  inputStyle={inputStyle}
                  control={form.control}
                  name='email'
                  label={'Email'}
                  placeholder='Email Adddress'
                  inputCategory='input'
                  inputType='email'
                />
                <FormInputField
                  inputStyle={inputStyle}
                  control={form.control}
                  name='phone'
                  label={'Phone'}
                  placeholder='phone Number'
                  inputCategory='input'
                  inputType='tel'
                />
                <Button className='flex items-center justify-center text-white border border-[#A649FF] bg-[#A649FF] rounded-[10px] lg:h-[48px] h-[48px] w-[180px] lg:text-[16px] text-[14px] font-[400]'>
                  Sponsor <ArrowRight className='text-white w-4' />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </MaxScreenView>
  )
}
