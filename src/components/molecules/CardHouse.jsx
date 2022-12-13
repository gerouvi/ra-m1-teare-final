import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'
import { Button, Card, Title } from '../atoms'

const CardHouseStyled = styled(Card)`
  div:nth-child(1) {
    height: 135px;
    overflow: hidden;

    img {
      max-height: 100%;
      width: 100%;
    }
  }

  div:nth-child(2) {
    padding: 10px 7px;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      font-size: 18px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .ellipsis {
    padding-right: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

function CardHouse({ title, price, img }) {
  return (
    <CardHouseStyled>
      <div>
        <img alt={title} src={img} />
      </div>
      <div className="aa">
        <Title as="h5" margin="0" className="ellipsis" color={colors.gray}>
          {title}
        </Title>
        <span>
          {price}€ <Button bg={colors.lilac}>Localizar</Button>
        </span>
      </div>
    </CardHouseStyled>
  )
}

CardHouse.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
}

export default CardHouse
