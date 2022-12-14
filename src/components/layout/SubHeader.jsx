import styled from 'styled-components'
import { colors } from '../../styles'
import dimensions from '../../styles/dimensions'
import { InputText } from '../atoms'
import Icon from '../atoms/IconButton'

const SubHeaderStyled = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${colors.lightblue};
  padding: ${dimensions.padding.sm} ${dimensions.padding.base};
`

function SubHeader({ ...props }) {
  return (
    <SubHeaderStyled {...props}>
      <InputText placeholder="Piso, chalet o garaje..." />
      <InputText placeholder="Madrid, Barcelona o Zaragoza..." />
      <Icon icon="settings" />
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
