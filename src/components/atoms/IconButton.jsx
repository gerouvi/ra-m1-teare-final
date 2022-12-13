import styled from 'styled-components'
import { colors } from '../../styles'

const Icon = styled.button.attrs(({ icon }) => ({
  children: icon,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 20%;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ color }) => color || colors.brokenwhite};
  background-color: ${({ bg }) => bg || colors.blue};

  &:active {
    transform: scale(0.8);
  }
`

export default styled(Icon)``
