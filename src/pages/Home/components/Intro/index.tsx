import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import introImage from '../../../../assets/product.svg'
import { IntroContainer, InfosContainer, StrongPointsItems, StrongItem } from "./style";

export function Intro() {
  return (
    <IntroContainer>
      <InfosContainer>
        <h4>Encontre o café perfeito para qualquer hora do dia</h4>
        <h6>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h6>
        <StrongPointsItems>
        <StrongItem variant='#C47F17'>
            <div><ShoppingCart size={16} color='#fff' weight='fill'/></div>
            <span>Compra simples e segura</span>
          </StrongItem>
          <StrongItem variant='#DBAC2C'>
            <div><Timer size={16} color='#fff' weight='fill'/></div>
            <span>Entrega rápida e rastreada</span>
          </StrongItem>
          <StrongItem variant='#574F4D'>
            <div><Package size={16} color='#fff' weight='fill'/></div>
            <span>Embalagem mantém o café intacto</span>
          </StrongItem>
          <StrongItem variant='#8047F8'>
            <div><Coffee size={16} color='#fff' weight='fill'/></div>
            <span>O café chega fresquinho até você</span>
          </StrongItem>
        </StrongPointsItems>
      </InfosContainer>
      <div>
        <img src={introImage} alt="" />
      </div>
    </IntroContainer>
  )
}