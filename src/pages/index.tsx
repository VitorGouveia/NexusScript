import { FC, useState, useEffect } from 'react'

import Arrow from '../../public/arrow.svg'

import { Loading } from '@modules/Loading'
import { Button } from '@components'
import {
  HomeContainer,
  MainSection,
  Title,
  ButtonContainer,
  Progress,
  Description,
  ImgContainer,
  Dot,
} from '@styles/pages/home'

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const loadingDelay = 700

  const [step, setStep] = useState(0)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => setIsLoading(false), loadingDelay)
  }, [])

  return (
    <HomeContainer>
      {/* <Loading show={isLoading} /> */}

      <MainSection>
        <ImgContainer>
          <img src="/welcome-1.png" alt="Image of 3 finance icons" />
        </ImgContainer>

        <Title>Stay on top of your finance with us.</Title>

        <Description>
          Follow projects on every stage to see how each decision influence your
          incomes. <br />
          Set priorities and pinpoint risks.
        </Description>

        <Progress>
          <Dot active={step === 0} />
          <Dot active={step === 1} />
          <Dot active={step === 2} />
        </Progress>

        <ButtonContainer>
          <Button variant="primary" onClick={() => setStep(step + 1)}>
            Ok, next.
            <Arrow />
          </Button>
        </ButtonContainer>
      </MainSection>
    </HomeContainer>
  )
}

export default Home
