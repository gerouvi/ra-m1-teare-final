import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

// Debería de ser un JSX
const Button = styled.button`
  padding: 5px 15px;
  background-color: ${({ bg }) => bg || colors.blue};
  font-size: ${({ fontsize }) => fontsize || '13px'};
  color: ${({ color }) => color || colors.brokenwhite};
  border-radius: ${dimensions.xs};
  border: none;
  box-shadow: 2px 2px 10px ${colors.darkgray};
  cursor: pointer;

  &:active {
    transform: scale(0.8);
  }
`

export default styled(Button)``
