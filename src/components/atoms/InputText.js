import styled from 'styled-components'
import colors from '../../styles/colors'
import dimensions from '../../styles/dimensions'

// Esto debería de ser un JSX con PropTypes. Al igual que en el ejercicio anterior
// Puedes combinar Styled con JSX
const InputText = styled.input`
  width: ${({ width }) => width || '360px'};
  padding: ${dimensions.padding.xs} ${dimensions.padding.sm};
  border-radius: ${dimensions.xs};
  outline: 1px solid ${colors.gray};
  border: none;

  &::placeholder {
    color: ${colors.gray};
  }

  &:focus {
    outline: 2.5px solid ${colors.gray};
  }
`

export default styled(InputText)``
