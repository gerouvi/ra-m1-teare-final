import styled from 'styled-components'
import { colors } from '../../styles'

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

export default styled(Icon)``
