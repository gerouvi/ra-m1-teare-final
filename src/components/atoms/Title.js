import styled from 'styled-components'
import { colors } from '../../styles'

// Este componente no se puede usar para tener h1, h2, h3, h4, h5, h6.
// Debería de poderse
const Title = styled.h1`
  color: ${({ color }) => color || colors.black};
  margin: ${({ margin }) => margin};
`

export default styled(Title)``
