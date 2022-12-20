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

// Si el componente se llama Header, el archivo debería llamarse Header.jsx
function Header() {
  return (
    <HeaderStyled>
      <AnchorText href="#">MIPISO.com.es</AnchorText>
      {/* Continua sin haber un componente de molecules para la navegación como se indico en la primera revisión */}
      <div>
        <AnchorText href="#">Buscador</AnchorText>
        <AnchorText href="#">Datos</AnchorText>
        <AnchorText href="#">Mi Perfil</AnchorText>
      </div>
    </HeaderStyled>
  )
}

export default Header
