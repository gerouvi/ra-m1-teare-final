import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../styles/colors'
import dimensions from '../../styles/dimensions'

const InputTextStyled = styled.input`
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

function InputText({ onChange, ...props }) {
  return <InputTextStyled onChange={onChange} {...props} />
}

InputText.propTypes = {
  onChange: PropTypes.func,
}

export default styled(InputText)``
