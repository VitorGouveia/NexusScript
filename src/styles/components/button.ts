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
  variant: 'primary' | 'secondary'
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
        `
      : css`
          border: 2px solid ${props.theme.accent[200]};
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

  svg {
    width: clamp(16px, 2vw, 24px);
    height: auto;

    margin-left: 2rem;
  }
`

type ButtonTextProps = {
  isLoading: boolean
}

export const ButtonText = styled.span<ButtonTextProps>`
  width: 100%;
  height: 100%;

  color: ${(props) => props.theme.gray[100]};

  font-weight: bold;
  font-size: clamp(16px, 2vw, 24px);

  padding: clamp(0.5rem, 2vh, 1rem) clamp(1rem, 2vw, 2rem);

  transition: all 200ms;

  ${(props) =>
    props.isLoading &&
    css`
      visibility: hidden;
      opacity: 0;
    `}
`
