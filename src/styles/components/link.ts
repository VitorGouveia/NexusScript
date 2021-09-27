import styled from 'styled-components'

export const A = styled.a`
  svg {
    transition: all 200ms;
  }

  &:hover {
    svg {
      stroke: ${(props) => props.theme.accent[200]};
    }
  }
`
