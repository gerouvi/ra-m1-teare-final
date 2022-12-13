import styled from 'styled-components'
import { colors } from '../../styles'

const Title = styled.h1`
  color: ${({ color }) => color || colors.black};
  margin ${({ margin }) => margin}
`

export default styled(Title)``
