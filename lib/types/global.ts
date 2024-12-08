import { StaticImageData } from 'next/legacy/image'

export interface ITextPropType {
  style?: string
  children: React.ReactNode
  as?: 'h2' | 'h1' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  clickFunc?: () => void
}

export interface ICustomImagePropType {
  src: StaticImageData
  priority?: boolean
  alt?: string
  imgStyle?: string
  clickFunc?: (e?: any) => void // eslint-disable-line @typescript-eslint/no-explicit-any
  style: string
}

export interface ILogoPropType {
  style?: string
}

export interface IMaxScreenWrapperPropType {
  children: React.ReactNode
  style?: string
}

export interface IFormField {
  control: any // eslint-disable-line @typescript-eslint/no-explicit-any
  name: string
  labelStyle?: string
  label?: React.ReactNode | string
  inputCategory: 'input' | 'select' | 'textArea'
  value?: string
  handleValueChange?: (e: any) => void // eslint-disable-line @typescript-eslint/no-explicit-any
  asterik?: boolean
  inputStyle?: string
  inputType?: string
  placeholder: string
  readOnly?: boolean
  // required?: boolean;
  selectList?: string[]
}

export interface IPerson {
  img: StaticImageData
  title: string
  description: string
}

export interface IAccordium {
  title: string
  info: string
}

export interface IRevealAnimation {
  children: React.ReactNode
  side?: boolean
  style?: string
}

export interface IAccordiumnTitle {
  title: string
}

export interface IAccordiumnInfo {
  info: string
}