import { FC } from 'react'
import Head from 'next/head'

import { Topbar, Button, Input, Link } from '@components'
import {
  LoginContainer,
  MainSection,
  ButtonContainer,
  Form,
} from '@styles/pages/login'

const Login: FC = () => {
  return (
    <LoginContainer>
      <Head>
        <title>FinanceHub | Login</title>
      </Head>

      <MainSection>
        <Topbar back="/" />

        <Form>
          <Input name="e-mail" placeholder="e-mail" />
          <Input name="password" placeholder="password" />
        </Form>

        <ButtonContainer>
          <Button variant="primary">
            <Link href="/dash">Enter</Link>
          </Button>
        </ButtonContainer>
      </MainSection>
    </LoginContainer>
  )
}

export default Login
