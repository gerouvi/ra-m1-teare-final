import styled from 'styled-components'

const Grid = styled.div`
  display: ${({ inline }) => (inline ? 'inline-grid' : 'grid')};
  grid-template-columns: ${({ columns }) =>
    columns || 'repeat(auto-fit, minmax(200px, 200px))'};
  grid-template-rows: ${({ rows }) => rows || 'initial'};
  justify-content: ${({ justifycontent }) => justifycontent || 'space-between'};
  align-content: ${({ aligncontent }) => aligncontent || 'center'};
  justify-items: ${({ justifyitems }) => justifyitems || 'space-between'};
  align-items: ${({ alignitems }) => alignitems || 'center'};
  row-gap: ${({ rowgap }) => rowgap || 0};
  column-gap: ${({ columngap }) => columngap || 0};
`

export default Grid
