import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'react-phone-input-2/lib/style.css'

import GlobalStyled from '@styles/global'
import { Theme } from '@styles/theme'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
