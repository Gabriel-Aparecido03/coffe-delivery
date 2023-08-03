import { ReactNode, createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cart/reducer";
import { addCoffeeAtCartAction, removeCoffeeAtCartAction, resetCartAction, updateCoffeeQuantityAtCartAction } from "../reducers/cart/action";

export interface CoffeeCart {
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
  id: number;
  priceTotal: number;
  quantity: number;
}

interface CartContextProvider {
  children : ReactNode
}

interface CartContext {
  addCoffeeAtCart: (coffee : CoffeeCart) => void
  removeCoffeeAtCart: (id:number) => void
  updatedCoffeeAtCart: (id:number,quantity : number ) => void
  coffees: CoffeeCart[],
  resetCart: () => void
}

export const CartContext = createContext({} as CartContext)

export function CartContextProvider({ children }:CartContextProvider) {

  const [cartState,dispatch] = useReducer(cartReducer,{ coffees: []},(initialState) => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )

    if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)

    return initialState
  },)

  const { coffees } = cartState
  
  function addNewCoffe(coffee: CoffeeCart) {
    dispatch(addCoffeeAtCartAction(coffee))
  } 

  function removeCoffeeAtCart(id: number) {
    dispatch(removeCoffeeAtCartAction(id))
  }
  
  function resetCart() {
    dispatch(resetCartAction())
  }

  function updatedCoffeeAtCart(id:number,quantity : number ) {
    dispatch(updateCoffeeQuantityAtCartAction(id,quantity))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])


  return (
    <CartContext.Provider 
      value={{ 
        addCoffeeAtCart:addNewCoffe,
        coffees,
        removeCoffeeAtCart,
        updatedCoffeeAtCart,
        resetCart
      }}
    >
      { children }
    </CartContext.Provider>
  )
}