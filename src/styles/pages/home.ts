import styled, {
  css,
  FlattenSimpleInterpolation,
  keyframes,
} from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: flex-start;
`

type MainSectionProps = {
  step: number
}

export const MainSection = styled.section<MainSectionProps>`
  width: min(100%, 800px);
  max-width: 1200px;

  margin: auto;
  height: 100%;

  display: grid;

  grid-template-areas:
    'img'
    '.'
    'title'
    'description'
    'progress'
    'button';

  grid-template-columns: 100%;
  grid-template-rows: 250px 10vh 50px 64px repeat(2, min-content);

  place-content: center;

  padding: 2rem clamp(2rem, 12vw, 4rem);

  * {
    animation: 1.2s ${fadeIn} ease-out;
  }

  ${(props) =>
    props.step === 2 &&
    css`
      grid-template-rows: min-content 10vh 50px 64px repeat(2, min-content);
    `}
`

export const Title = styled.h1`
  grid-area: title;

  display: flex;
  align-items: flex-end;

  font-size: ${(props) => props.theme.size.h1};
`

export const Description = styled.p`
  grid-area: description;

  margin-top: 1rem;
  line-height: 16px;
`

export const Progress = styled.div`
  grid-area: progress;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: max(8vh, 2rem) 0;

  gap: 0.4rem;
`

type DotProps = {
  active?: boolean
  onClick?: any
}

export const Dot = styled.span<DotProps>`
  width: 8px;
  height: 8px;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.accent[100]};
  }

  border-radius: 50%;

  ${(props) =>
    props.active
      ? css`
          background: ${props.theme.accent[200]};
        `
      : css`
          background: ${props.theme.gray[100]};
        `}
`

export const ImgContainer = styled.div`
  grid-area: img;

  display: grid;
  place-items: center;

  img {
    width: min(80%, 300px);
    max-width: 350px;
    height: auto;
  }
`

type ButtonContainerProps = {
  step: number
}

export const ButtonContainer = styled.section<ButtonContainerProps>`
  grid-area: button;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${(props) =>
    props.step >= 2 &&
    css`
      display: grid;
      grid-template-areas:
        'login fingerprint'
        'register register';

      grid-template-columns: 8fr 2fr;
      grid-template-rows: 1fr 1fr;

      gap: 1rem;

      a,
      button {
        width: 100%;
        height: 100%;
      }

      [data-button='register'] {
        grid-area: register;
      }
    `}
`

const textNeon = css`
  text-shadow: 0px 0px 20px #ffffff;
`

const backgroundNeon = css`
  box-shadow: 0px 4px 16px #1526bb;
`

const flicker = (
  shadow: FlattenSimpleInterpolation,
  name: string,
  type: 'box' | 'text'
) => `
  @keyframes ${name} {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      ${shadow}
    }

    20%,
    24%,
    55% {
      ${
        type === 'box'
          ? `
            box-shadow: none;
          `
          : `
            text-shadow: none;
          `
      }
    }
  }
`

export const LogoContainer = styled.section`
  margin: auto;

  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
`

export const LogoBackground = styled.div`
  width: 96px;
  height: 96px;

  display: grid;
  place-items: center;

  h1 {
    font-family: 'Lato';
    font-weight: 900;
    font-size: ${(props) => props.theme.size.logo};

    ${css`
      ${flicker(textNeon, 'turnOnText', 'text')}
    `}
    animation: turnOnText 1.5s infinite alternate;
  }

  ${css`
    ${flicker(backgroundNeon, 'turnOnBackground', 'box')}
  `}

  animation: turnOnBackground 1.5s infinite alternate;

  border-radius: ${(props) => props.theme.radius.sm};

  padding: ${(props) => props.theme.padding.sm};

  background: ${(props) => props.theme.accent[200]};

  @media screen and (prefers-reduced-motion) {
    h1 {
      animation: none;
    }

    animation: none;
  }
`
