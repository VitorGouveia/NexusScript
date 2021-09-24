import { FC } from 'react'

import { LogoContainer, LogoBackground } from '@styles/modules/loading'

type LoadingProps = {
  show: boolean
}

export const Loading: FC<LoadingProps> = ({ show }) => {
  return (
    <LogoContainer show={show}>
      <LogoBackground>
        <h1>$</h1>
      </LogoBackground>
    </LogoContainer>
  )
}
