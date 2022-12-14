import styled from 'styled-components'
import { colors } from '../../styles'

// Darle el width y el height es un error, haces que no sea reutilizable
const Card = styled.div`
  width: 200px;
  height: 210px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 2px 2px 10px ${colors.darkgray};
`

export default styled(Card)``
