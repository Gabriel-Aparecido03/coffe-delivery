import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { CoffeeContainer, CoffeeImageContainer, InfoCoffeeContainer, PriceCoffeeContainer, ButtonQuantity, AddToCart, ButtonsActions, Tags, Price } from "./style";
import { useCart } from "../../../../hooks/useCart";
import { coinFormatter } from "../../../../utils/formatter";

interface CoffeeTypes {
  image : string;
  name : string;
  description:string;
  price:number;
  tags:string[]
  id:number
}

export function Coffee({description,image,name,price,tags,id }:CoffeeTypes) {

  const [ quantity,setQuantity ] = useState(1)

  const { addCoffeeAtCart } = useCart()

  function handleAddQuantity() {
    setQuantity(prev => prev + 1)
  }
  
  function handleMinusQuantity() {
    if( quantity > 0 ) setQuantity(prev => prev - 1)
  }

  function handleAddItem() {
    const data = {
      name,
      description,
      price,
      tags,
      image,
      id,
      priceTotal : price * quantity,
      quantity
    }

    addCoffeeAtCart(data)
  }

  return (
    <CoffeeContainer>
      <CoffeeImageContainer>
        <img src={image} alt="" />
        <Tags >
          { tags.map((item,key) => <span key={key}>{item}</span>)}
        </Tags>
      </CoffeeImageContainer>
      <InfoCoffeeContainer>
        <p>{ name }</p>
        <span>{ description }</span>
      </InfoCoffeeContainer>
      <PriceCoffeeContainer>
        <Price >
          <span>R$</span>
          <p>{ coinFormatter.format(price) }</p>
        </Price>
        <ButtonsActions>
          <ButtonQuantity>
            <Minus 
              onClick={handleMinusQuantity} 
              size={22}
            />
            { quantity }
            <Plus 
              onClick={handleAddQuantity} 
              size={22}
            />
          </ButtonQuantity>
          <AddToCart onClick={handleAddItem}>
            <ShoppingCart />
          </AddToCart>
        </ButtonsActions>
      </PriceCoffeeContainer>
    </CoffeeContainer>
  )
}