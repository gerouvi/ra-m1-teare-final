import styled from 'styled-components'
import { colors } from '../../styles'

// Estas mezclando varias cosas
// 1. El componente Icon no tiene porque tener todo lo necesario para renderizar el botón. Ya tienes un componente Button. Quizas tengas que hacer <Button><Icon icon="search" /></Button>
const Icon = styled.span.attrs(({ icon }) => ({
  children: icon,
  className: 'material-symbols-outlined',
}))`
  width: ${({ width }) => width || '2rem'};
  height: ${({ height }) => height || '2rem'};
  border-radius: ${({ radius }) => radius || '20%'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color || colors.brokenwhite};
  background-color: ${({ bg }) => bg || colors.blue};
  font-variation-settings: ${({ fill, wght, grad, opsz }) =>
    `'FILL' ${fill || 0}, 'wght' ${wght || 400}, 'GRAD' ${grad || 0}, 'opsz' ${
      opsz || 48
    }`};
`

// Ya esun styled component, no necesitas volver a exportarlo con styled()``.
// Al ser un styled component no necesitas que sea un .jsx. Puedes usar .js
export default styled(Icon)``
