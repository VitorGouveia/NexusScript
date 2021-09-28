import styled from 'styled-components'

export const LoginContainer = styled.main`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
`

export const MainSection = styled.section`
  width: min(100%, 1200px);
  height: 100%;

  display: grid;
  grid-template-areas:
    'topbar'
    'form'
    'button';
  grid-template-columns: 100%;
  grid-template-rows: 10vh 10vh min-content;

  place-content: space-between;

  padding: 2rem clamp(2rem, 12vw, 4rem);
`

export const Form = styled.form`
  margin: auto;
  width: 80%;
  height: 100%;

  row-gap: 4rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  div {
    width: 100%;

    input {
      width: 100%;
    }
  }

  grid-area: form;
`

export const ButtonContainer = styled.section`
  width: 100%;

  grid-area: button;

  button {
    width: 100%;
  }
`
