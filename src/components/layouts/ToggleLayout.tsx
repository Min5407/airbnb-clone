'use client'

import { merge } from '@/lib/tailwind'
import React, { useState } from 'react'

interface Props {
  children: React.ReactNode | React.ReactNode[]
  TriggerComponent: JSX.Element
  className?: string
}
export const ToggleLayout = ({
  TriggerComponent,
  children,
  className = '',
}: Props) => {
  const [isTrue, setIsTrue] = useState(true)

  const handleClick = () => {
    setIsTrue((prev) => !prev)
  }

  const TriggerElement = React.cloneElement(TriggerComponent, {
    onClick: handleClick,
  })

  return (
    <div className={merge(['relative', className])}>
      {TriggerElement}
      {isTrue && children}
    </div>
  )
}
