import styled from 'styled-components'
import dimensions from '../../styles/dimensions'
import { AnchorText } from '../atoms'

const HeaderStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: ${dimensions.padding.base};

  div {
    display: flex;
    gap: 10px;
  }
`

function Header() {
  return (
    <HeaderStyled>
      <AnchorText href="#">MIPISO.com.es</AnchorText>
      <div>
        <AnchorText href="#">Buscador</AnchorText>
        <AnchorText href="#">Datos</AnchorText>
        <AnchorText href="#">Mi Perfil</AnchorText>
      </div>
    </HeaderStyled>
  )
}

export default Header
