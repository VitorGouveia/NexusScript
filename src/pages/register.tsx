import { FC, useState } from 'react'
import { ArrowLeft } from 'react-feather'
import Fingerprint from '../../public/fingerprint.svg'

import { Button, Topbar, Input, Link } from '@components'

import {
  MainSection,
  RegisterContainer,
  Form,
  Terms,
  Title,
  Pinpad,
} from '@styles/pages/register'

const register: FC = () => {
  const [verificationCodeSent, setVerificationCodeSent] = useState(false)
  const [codeValue, setCodeValue] = useState('')
  const [email, setEmail] = useState('')

  return (
    <RegisterContainer>
      <MainSection>
        {verificationCodeSent ? (
          <Topbar onClick={() => setVerificationCodeSent(false)} back="#" />
        ) : (
          <Topbar back="/" />
        )}

        <Title>
          {verificationCodeSent ? (
            <>
              <h1>Verification</h1>
              <p>Enter the verification code we sent to your phone</p>
            </>
          ) : (
            <>
              <h1>Register</h1>
              <p>Choose a country code and enter your e-mail</p>
            </>
          )}
        </Title>

        <Form sideways={verificationCodeSent}>
          {verificationCodeSent ? (
            <>
              <Input
                value={codeValue}
                noLabel
                placeholder="1"
                name="digit1"
                type="string"
                onChange={(event) => setCodeValue(event.target.value)}
              />
            </>
          ) : (
            <Input
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="E-mail"
              name="email"
              type="email"
            />
          )}
        </Form>

        {verificationCodeSent ? (
          <Pinpad>
            <button onClick={() => setCodeValue(`${codeValue}1`)}>1</button>
            <button onClick={() => setCodeValue(`${codeValue}2`)}>2</button>
            <button onClick={() => setCodeValue(`${codeValue}3`)}>3</button>
            <button onClick={() => setCodeValue(`${codeValue}4`)}>4</button>
            <button onClick={() => setCodeValue(`${codeValue}5`)}>5</button>
            <button onClick={() => setCodeValue(`${codeValue}6`)}>6</button>
            <button onClick={() => setCodeValue(`${codeValue}7`)}>7</button>
            <button onClick={() => setCodeValue(`${codeValue}8`)}>8</button>
            <button onClick={() => setCodeValue(`${codeValue}9`)}>9</button>
            <button></button>
            <button onClick={() => setCodeValue(`${codeValue}0`)}>0</button>
            <button
              onClick={() =>
                setCodeValue(`${codeValue.substring(0, codeValue.length - 1)}`)
              }
            >
              <ArrowLeft />
            </button>
          </Pinpad>
        ) : (
          <Terms>
            By submitting this application you confirm that you are authorized
            to share this information and agree with our{' '}
            <span>
              <Link href="#">Term and Conditions</Link>
            </span>
          </Terms>
        )}

        <Button
          variant="primary"
          onClick={() => {
            if (!!email !== false) {
              setVerificationCodeSent(true)
            } else {
              /* do something */
              /* check for errors */
            }
          }}
        >
          Send Verification Code
        </Button>
      </MainSection>
    </RegisterContainer>
  )
}

export default register
