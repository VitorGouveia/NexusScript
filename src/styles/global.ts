import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;

    font: ${(props) => props.theme.font.roboto};

    color: ${(props) => props.theme.gray[100]};
    background: ${(props) => props.theme.gray[900]};
  }
`
