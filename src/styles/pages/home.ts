import styled, { css } from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: flex-start;
`

export const MainSection = styled.section`
  width: 100%;
  height: 100%;

  display: grid;

  grid-template-areas:
    'img'
    '.'
    '.'
    'title'
    'description'
    'progress'
    'button';
  grid-template-rows: 40vh 10vh repeat(3, min-content);

  padding: 0 clamp(2rem, 12vw, 4rem);
`

export const Title = styled.h1`
  grid-area: title;

  font-size: ${(props) => props.theme.size.h1};
`

export const Description = styled.p`
  grid-area: description;

  margin-top: 1rem;
  line-height: 16px;

  font-size: clamp(0.5em, 0.3379rem + 0.8vw, 1rem);
`

export const Progress = styled.div`
  grid-area: progress;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 0;

  gap: 0.4rem;
`

type DotProps = {
  active?: boolean
}

export const Dot = styled.span<DotProps>`
  width: 8px;
  height: 8px;

  border-radius: 50%;

  ${(props) =>
    props.active
      ? css`
          background: ${props.theme.accent[100]};
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
    height: auto;
  }
`

export const ButtonContainer = styled.section`
  grid-area: button;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`
