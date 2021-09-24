import styled, { css } from 'styled-components'

type ButtonProps = {
  variant: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<ButtonProps>`
  position: relative;

  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;
  color: ${(props) => props.theme.gray[100]};

  border-radius: ${(props) => props.theme.radius.md};

  font-size: 24px;

  ${(props) =>
    props.variant === 'primary'
      ? css`
          background: ${props.theme.accent[100]};
        `
      : css`
          border: 2px solid ${props.theme.accent[100]};
        `}

  svg {
    margin-left: 2rem;
  }
`
