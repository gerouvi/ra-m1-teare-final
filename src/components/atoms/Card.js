import styled from 'styled-components'
import { colors } from '../../styles'

const Card = styled.div`
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '210px'};
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 2px 2px 10px ${colors.darkgray};
`

export default styled(Card)``
