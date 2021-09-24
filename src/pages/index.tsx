import { FC, useState, useEffect } from 'react'

import Arrow from '../../public/arrow.svg'
import Fingerprint from '../../public/fingerprint.svg'
import Graph from '../../public/graph.svg'

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
  LogoContainer,
  LogoBackground,
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

      <MainSection step={step}>
        <ImgContainer>
          {step === 0 && (
            <img src="/welcome-1.png" alt="Image of 3 finance icons" />
          )}

          {step === 1 && <img src="/graph.svg" />}

          {step === 2 && (
            <LogoContainer>
              <LogoBackground>
                <h1>$</h1>
              </LogoBackground>
            </LogoContainer>
          )}
        </ImgContainer>

        <Title>
          {step === 0 && <>Stay on top of your finance with us.</>}
          {step === 1 && <>Mutual Investment</>}
          {step === 2 && <>Start Now</>}
        </Title>

        <Description>
          {step === 0 && (
            <>
              Follow projects on every stage to see how each decision influence
              your incomes. <br />
              Set priorities and pinpoint risks.
            </>
          )}
          {step === 1 && (
            <>
              At FinanceHub we care about your future.
              <br />
              We help you invest the way you want.
              <br />
              So you can relax, have fun and let your fund grow.
            </>
          )}
          {step === 2 && (
            <>Create your account or Login into an existing account</>
          )}
        </Description>

        <Progress>
          <>
            <Dot onClick={() => setStep(0)} active={step === 0} />
            <Dot onClick={() => setStep(1)} active={step === 1} />
            <Dot onClick={() => setStep(2)} active={step === 2} />
          </>
        </Progress>

        <ButtonContainer step={step}>
          {step < 2 ? (
            <Button icon variant="primary" onClick={() => setStep(step + 1)}>
              {step === 0 && <>Ok, next.</>}
              {step === 1 && <>Hm, interesting.</>}
              <Arrow />
            </Button>
          ) : (
            <>
              <Button variant="secondary">Log in</Button>
              <Button variant="tertiary">
                <Fingerprint />
              </Button>
              <Button data-button="register" variant="primary">
                Create My Account
              </Button>
            </>
          )}
        </ButtonContainer>
      </MainSection>
    </HomeContainer>
  )
}

export default Home
