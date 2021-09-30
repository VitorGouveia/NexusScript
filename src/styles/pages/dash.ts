import styled from 'styled-components'

export const DashContainer = styled.main`
  width: min(100%, 1200px);
  height: 100%;

  display: grid;
  grid-template-areas:
    'header'
    'main'
    'main';

  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 1fr);

  background: ${(props) => props.theme.gray[900]};

  margin: auto;
`

export const Header = styled.header`
  width: 100%;

  display: grid;
  grid-template-areas:
    'money   money   money . bell pic'
    'balance .      .      . .    .'
    '. .      .      . .    .'
    'nav nav nav nav nav nav';
  grid-template-columns: 1fr 1fr 1fr min-content min-content;
  grid-template-rows:
    clamp(0.8rem, 0.6952rem + 0.6707vw, 1.5rem)
    clamp(0.6rem, 0.5027rem + 0.6228vw, 1.25rem)
    2rem
    min-content;

  place-content: center;
  align-items: center;

  padding: 0 clamp(1rem, 0.2515rem + 4.7904vw, 6rem);

  background: linear-gradient(250.62deg, #4f47eb -11.58%, #2f41f0 111.2%);
  border-radius: 0px 0px 32px 32px;

  small {
    grid-area: balance;

    font-weight: bold;
    color: #9ba1f7;
  }

  > svg {
    grid-area: bell;

    width: clamp(1rem, 0.8802rem + 0.7665vw, 1.8rem);
    height: clamp(1rem, 0.8802rem + 0.7665vw, 1.8rem);
    margin-right: 1rem;
    transition: opacity 200ms;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  > div {
    grid-area: pic;

    width: clamp(1rem, 0.8802rem + 0.7665vw, 1.8rem);
    height: clamp(1rem, 0.8802rem + 0.7665vw, 1.8rem);

    border: 2px solid ${(props) => props.theme.gray[100]};
    border-radius: 50%;

    transition: opacity 200ms;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }

    img {
      border-radius: 50%;
    }
  }
`

export const MoneyHeading = styled.h1`
  grid-area: money;
  color: ${(props) => props.theme.gray[100]};
  font-size: clamp(0.8rem, 0.6952rem + 0.6707vw, 1.5rem);
`

export const Nav = styled.nav`
  grid-area: nav;

  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: min-content;

  place-content: space-between;
`

export const NavCard = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  row-gap: 8px;

  font-weight: bold;

  transition: all 200ms;

  picture {
    background: #9ba1f7;
    padding: 1rem;

    display: grid;
    place-items: center;

    border-radius: 0.6rem;
  }

  &:hover {
    cursor: pointer;

    color: ${(props) => props.theme.accent[100]};
  }
`

export const Main = styled.section`
  grid-area: main;
`
