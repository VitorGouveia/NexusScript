import styled from 'styled-components'

export const RegisterContainer = styled.main`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: flex-start;
`

export const MainSection = styled.section`
  width: min(100%, 800px);
  max-width: 1200px;

  margin: auto;
  height: 100%;

  display: grid;

  grid-template-areas:
    'topbar'
    'title'
    'form'
    'terms'
    'button';
  grid-template-columns: 100%;
  grid-template-rows: auto;

  row-gap: 1rem;

  padding: 2rem clamp(2rem, 12vw, 4rem);
`

export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
`

export const Terms = styled.small`
  width: 100%;
  text-align: center;

  span {
    font-weight: bold;
    color: ${(props) => props.theme.accent[100]};
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
`
