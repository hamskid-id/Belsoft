'use client'

import React from 'react'
import { ITextPropType } from '../../lib/types/global'

const Component: React.FC<ITextPropType> = ({
  as,
  style,
  clickFunc,
  children
}) => {
  const Element = as ? as : 'div'
  return React.createElement(
    Element,
    { className: style, onClick: clickFunc },
    children
  )
}

export const Text: React.FC<ITextPropType> = ({
  style,
  children,
  clickFunc,
  as
}) => {
  if (as) {
    return (
      <Component style={style} clickFunc={clickFunc} as={as}>
        {children}
      </Component>
    )
  } else {
    return (
      <h6 className={style} onClick={clickFunc}>
        {children}
      </h6>
    )
  }
}
