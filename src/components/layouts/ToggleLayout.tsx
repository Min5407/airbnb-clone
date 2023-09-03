'use client'

import React, { useState } from 'react'

interface Props {
  children: React.ReactNode | React.ReactNode[]
  TriggerComponent: JSX.Element
}
export const ToggleLayout = ({ TriggerComponent, children }: Props) => {
  const [isTrue, setIsTrue] = useState(false)

  const handleClick = () => {
    TriggerComponent?.props?.onClick && TriggerComponent?.props?.onClick()
    setIsTrue((prev) => !prev)
  }

  const TriggerElement = React.cloneElement(TriggerComponent, {
    onClick: handleClick,
  })
  return (
    <div className="relative">
      {TriggerElement}
      {isTrue && children}
    </div>
  )
}
