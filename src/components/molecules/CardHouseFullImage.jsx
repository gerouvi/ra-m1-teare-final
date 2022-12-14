import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'
import { Card, Title } from '../atoms'

const CardHouseFullImageStyled = styled(Card)`
  position: relative;
  display: flex;
  justify-content: center;
  align-item: center;

  div {
    position: absolute;
    padding: 6px 5px;
    color: ${colors.brokenwhite};
    span {
      font-weight: bold;
    }
  }
  img {
    max-height: 100%;
  }
`

function CardHouseFullImage({ title, price, img }) {
  return (
    <CardHouseFullImageStyled>
      <div>
        <Title as="h4" margin="0" color={colors.white}>
          {title}
        </Title>
        <span>{price}€</span>
      </div>
      <img alt={title} src={img} />
    </CardHouseFullImageStyled>
  )
}

CardHouseFullImage.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
}

export default CardHouseFullImage
