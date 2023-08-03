import { Minus, Plus, Trash } from "phosphor-react";
import { ButtonDelete, ButtonQuantity, ButtonsActions, CoffeInfosTitle, CoffeeContainer, CoffeeInfos } from "./style";
import { useState } from "react";
import { useCart } from "../../../../hooks/useCart";
import { coinFormatter } from "../../../../utils/formatter";

interface CoffeeTypes {
  image : string;
  name : string;
  price:number;
  id:number
}

export function Coffee({image,name,price,id }:CoffeeTypes) {

  const [ quantity,setQuantity ] = useState(1)

  const { updatedCoffeeAtCart,removeCoffeeAtCart } = useCart()

  function handleAddQuantity() {
    updatedCoffeeAtCart(id,quantity + 1)
    setQuantity(prev => prev + 1)
  }
  function handleMinusQuantity() {
    if( quantity > 0 ) {
      updatedCoffeeAtCart(id,quantity - 1)
      setQuantity(prev => prev - 1)
    }
  }

  function handleDeleteCoffe() {
    removeCoffeeAtCart(id)
  }

  return (
    <CoffeeContainer>
      <img src={image} alt="" />
      <CoffeeInfos>
        <div>
          <CoffeInfosTitle>
            <p>{ name }</p>
            <span>{ coinFormatter.format(price) }</span>
          </CoffeInfosTitle>
        </div>
        <ButtonsActions>
          <ButtonQuantity>
            <Minus size={14} onClick={handleMinusQuantity}/>
            <span>{ quantity }</span>
            <Plus size={14} onClick={handleAddQuantity}/>
          </ButtonQuantity>
          <ButtonDelete onClick={handleDeleteCoffe}>
            <Trash />
            Remover
          </ButtonDelete>
        </ButtonsActions>
        </CoffeeInfos>
    </CoffeeContainer>
  )
}