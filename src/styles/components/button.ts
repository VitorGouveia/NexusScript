import styled, { css, keyframes } from 'styled-components'

const loadingAnimation = css`
  @keyframes loading {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }
`

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary'
  isLoading: boolean
}

export const ButtonContainer = styled.button<ButtonProps>`
  position: relative;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: ${(props) => props.theme.radius.md};

  transition: all 200ms;

  &:hover {
    background: ${(props) => props.theme.accent[100]};
  }

  ${(props) =>
    props.variant === 'primary'
      ? css`
          background: ${props.theme.accent[200]};
          box-shadow: 0px 4px 16px #36319f;

          span {
            text-shadow: 0px 4px 16px rgba(171, 175, 212, 0.67);
          }
        `
      : css`
          background: transparent;
          border: 3px solid ${props.theme.accent[200]};

          &:hover {
            background: transparent;
            border-color: ${props.theme.accent[100]};
          }
        `}

  ${(props) =>
    props.variant === 'tertiary' &&
    css`
      border: 0;
      background: ${props.theme.gray[800]};

      &:hover {
        background: ${props.theme.gray[700]};
      }
    `}

  ${(props) =>
    props.isLoading &&
    css`
      ${loadingAnimation}

      &::after {
        content: '';

        position: absolute;

        width: 16px;
        height: 16px;

        inset: 0;
        margin: auto;

        border: 4px solid transparent;
        border-top-color: ${props.theme.gray[100]};
        border-radius: 50%;

        animation: loading 1s ease-out infinite;
      }
    `}
`

type ButtonTextProps = {
  isLoading: boolean
  icon: boolean
}

export const ButtonText = styled.span<ButtonTextProps>`
  width: 100%;
  height: 100%;

  color: ${(props) => props.theme.gray[100]};

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: clamp(0.5rem, 0.4153rem + 0.904vw, 1.5rem);

  padding: clamp(0.5rem, 0.4153rem + 0.904vw, 1.5rem) clamp(1rem, 2vw, 2rem);

  transition: all 200ms;

  ${(props) =>
    props.icon &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.isLoading &&
    css`
      visibility: hidden;
      opacity: 0;
    `}
`
