import styled, { css } from 'styled-components'

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
  grid-template-rows: repeat(5, min-content);

  place-content: space-between;

  row-gap: 1rem;

  padding: 2rem clamp(2rem, 12vw, 4rem);
`

type FormProps = {
  sideways: boolean
}

export const Form = styled.form<FormProps>`
  margin: auto;

  width: 80%;
  height: 100%;

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

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Terms = styled.small`
  width: 100%;
  text-align: center;

  span {
    position: relative;
    font-weight: bold;
    color: ${(props) => props.theme.accent[200]};

    transition: all 200ms;

    &::after {
      position: absolute;
      left: 0;
      bottom: -1px;
      content: '';
      width: 0px;
      height: 1px;
      display: block;
      background: ${(props) => props.theme.accent[100]};
      transition: all 200ms;
    }

    &:hover {
      color: ${(props) => props.theme.accent[100]};

      &::after {
        width: 100%;
      }
    }
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin: auto;
    text-align: center;
    width: 70%;
  }
`

export const Pinpad = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, 36px);
  grid-template-rows: repeat(4, 36px);

  gap: 42px;
  place-content: center;

  button {
    color: ${(props) => props.theme.gray[100]};
    background: transparent;
    font-size: clamp(0.2rem, 0.8364rem + 0.9697vw, 2rem);
    transition: all 200ms;

    &:hover,
    &:focus {
      cursor: pointer;
      color: ${(props) => props.theme.accent[200]};

      svg {
        stroke: ${(props) => props.theme.accent[200]};
      }
    }
  }
`
