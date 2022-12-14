import styled from 'styled-components'
import Grid from '../../styles/Grid'
import { CardHouse, CardHouseFullImage } from '../molecules'

const CARDS = [
  {
    id: 1,
    title: 'Piso en Barcelona, Gracia en el centro',
    price: 939.999,
    img: '/assets/images/house1.png',
  },
  {
    id: 2,
    title: 'Piso en Barcelona, Gracia en el centro',
    price: 939.999,
    img: '/assets/images/house1.png',
  },
  {
    id: 3,
    title: 'Piso en Barcelona, Gracia en el centro',
    price: 939.999,
    img: '/assets/images/house1.png',
  },
  {
    id: 4,
    title: 'Piso en Barcelona, Gracia en el centro',
    price: 939.999,
    img: '/assets/images/house1.png',
  },
  {
    id: 5,
    title: 'Piso en Barcelona, Gracia en el centro',
    price: 939.999,
    img: '/assets/images/house1.png',
  },
  {
    id: 6,
    title: 'Piso en Barcelona, Gracia en el centro',
    price: 939.999,
    img: '/assets/images/house1.png',
  },
  {
    id: 7,
    title: 'Piso en Barcelona, Gracia en el centro',
    price: 939.999,
    img: '/assets/images/house1.png',
  },
  {
    id: 8,
    title: 'Piso en Barcelona, Gracia en el centro',
    price: 939.999,
    img: '/assets/images/house1.png',
  },
  {
    id: 9,
    title: 'Piso en Barcelona, Gracia en el centro',
    price: 939.999,
    img: '/assets/images/house1.png',
  },
]

// Bien traido el uso de styled components
const HousesStyled = styled(Grid)``

// Debería de estar en organisms
function Houses() {
  return (
    <HousesStyled rowgap="20px" columngap="10px">
      {CARDS.map((card, index) => {
        if (index === 0) return <CardHouseFullImage key={card.id} {...card} />
        return <CardHouse key={card.id} {...card} />
      })}
    </HousesStyled>
  )
}

export default Houses
