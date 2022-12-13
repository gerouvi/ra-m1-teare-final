import styled from 'styled-components'
import colors from '../../styles/colors'

const AnchorText = styled.a`
  text-decoration: none;
  color: ${({ color }) => color || colors.darkgray};

  &:active {
    color: ${({ activecolor }) => activecolor || colors.lightblack};
  }
`

export default styled(AnchorText)``
