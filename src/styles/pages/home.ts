import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

const textNeon = css`
  text-shadow: 0px 0px 20px #ffffff;
`

const backgroundNeon = css`
  box-shadow: 0px 4px 16px #1526bb;
`

const fadeOut = css`
  @keyframes fadeContainerOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
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

type HomeContainerProps = {
  show: boolean
}

export const HomeContainer = styled.main<HomeContainerProps>`
  width: 100%;
  height: 100%;

  ${(props) =>
    props.show
      ? css``
      : css`
          ${fadeOut}

          animation: fadeContainerOut 200ms forwards;
        `}

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
