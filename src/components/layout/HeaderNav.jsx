import styled from 'styled-components'
import dimensions from '../../styles/dimensions'
import { AnchorText } from '../atoms'

const HeaderNavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: ${dimensions.padding.base};

  div {
    display: flex;
    gap: 10px;
  }
`

// Debería llamarse Header a secas
function HeaderNav() {
  return (
    <HeaderNavStyled>
      <AnchorText href="#">MIPISO.com.es</AnchorText>
      {/* Este seria un componente de navegación que debería de estar en molecules */}
      <div>
        <AnchorText href="#">Buscador</AnchorText>
        <AnchorText href="#">Datos</AnchorText>
        <AnchorText href="#">Mi Perfil</AnchorText>
      </div>
    </HeaderNavStyled>
  )
}

export default HeaderNav
