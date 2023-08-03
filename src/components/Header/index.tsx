import { MapPin, ShoppingCart } from 'phosphor-react';
import logoSvg from '../../assets/logo.svg';
import { HeaderContainer, ContainerLoalizator, ButtonCart, BadgeQuantityCart } from './style';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
export function Header() {

  const { coffees } = useCart()
  const quantity = coffees.length

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoSvg} alt="" />
      </Link>
      <div>
        <ContainerLoalizator>
          <MapPin />
          Sao Paulo,Sp
        </ContainerLoalizator>
        <ButtonCart to="/checkout">
          <ShoppingCart size={22}/>
          { quantity > 0 && <BadgeQuantityCart><span>{ quantity }</span></BadgeQuantityCart>}
        </ButtonCart>
      </div>
    </HeaderContainer>
  )
}