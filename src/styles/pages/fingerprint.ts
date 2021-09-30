import styled from 'styled-components'

export const FingerprintContainer = styled.main`
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
    '.'
    'finger';
  grid-template-columns: 100%;
  grid-template-rows: 10vh 10vh min-content;

  place-content: space-between;

  padding: 2rem clamp(2rem, 12vw, 4rem);
  padding-bottom: calc(clamp(2rem, 12vw, 4rem) * 2);
`

export const FingerprintButtonContainer = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
  justify-content: center;

  grid-area: finger;
`

export const FingerprintButton = styled.button`
  grid-area: finger;

  margin: auto;

  width: clamp(80px, 10vw, 30vw);
  height: clamp(80px, 10vw, 30vw);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;

  cursor: pointer;
  position: relative;

  span {
    width: 50%;
    height: 50%;
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &.print {
      &--over {
        svg {
          path {
            stroke: ${(props) => props.theme.accent[100]};
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
            transition: all 2s;
          }
        }
      }
    }
  }

  svg {
    stroke: blue;
    fill: transparent;
    stroke-width: 6px;
    stroke: ${(props) => props.theme.gray[100]};
  }

  &:hover,
  &:focus {
    .print {
      &--over {
        svg {
          path {
            stroke: ${(props) => props.theme.accent[200]};
            width: 100%;
            stroke-dashoffset: 0;
          }
        }
      }
    }
  }
`
