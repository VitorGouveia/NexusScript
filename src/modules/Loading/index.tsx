import { FC } from 'react'

import { HomeContainer, LogoBackground } from '@styles/pages/home'

type LoadingProps = {
  show: boolean
}

export const Loading: FC<LoadingProps> = ({ show }) => {
  return (
    <HomeContainer show={show}>
      <LogoBackground>
        <h1>$</h1>
      </LogoBackground>
    </HomeContainer>
  )
}
