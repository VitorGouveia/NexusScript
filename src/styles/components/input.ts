import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
`

export const InputElement = styled.input`
  font-size: 14px;
  border: 0;
  outline: 0;
  padding: 4px 0;
  border-bottom: 1px solid #ccc;
  background: transparent;
  z-index: 10;
  color: ${(props) => props.theme.gray[700]};

  &:focus {
    & ~ span {
      width: 100%;
      transition: 0.4s;
    }

    & ~ label {
      top: -16px;
      font-size: 12px;
      color: #3399ff;
      transition: 0.3s;
      cursor: default;
    }
  }
`

export const Label = styled.label`
  position: absolute;
  left: 0;

  width: 100%;
  cursor: text;
  top: 50%;
  font-weight: bold;
  transform: translateY(-50%);
  color: #aaa;
  transition: 0.2s;
  letter-spacing: 0.5px;
`

export const Span = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 0;
  height: 1px;
  background: #3399ff;
  transition: 0.4s;
`
