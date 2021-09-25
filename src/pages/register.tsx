import { FC } from 'react'

import { Button, Topbar, Input } from '@components'

import {
  MainSection,
  RegisterContainer,
  Form,
  Terms,
  Title,
} from '@styles/pages/register'

const register: FC = () => {
  return (
    <RegisterContainer>
      <MainSection>
        <Topbar />

        <Title>
          <h1>Register</h1>
          <p>Choose a country code and enter your phone number</p>
        </Title>

        <Form>
          <Input placeholder="Nome" name="name" type="text" />
        </Form>

        <Terms>
          By submitting this application you confirm that you are authorized to
          share this information and agree with our{' '}
          <span>Term and Conditions</span>
        </Terms>

        <Button variant="primary">Send Verification Code</Button>
      </MainSection>
    </RegisterContainer>
  )
}

export default register
