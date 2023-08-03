import { ActionTypes } from "./action";

interface CoffeeCart {
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
  id: number;
  priceTotal: number;
  quantity: number;
}

interface CartState {
  coffees: CoffeeCart[]
}

export function cartReducer(state: CartState,action: any ) {
  switch(action.type) {
    case ActionTypes.ADD_COFFEE_AT_CART: 
      return {
        ...state,
        coffees: [...state.coffees,action.payload.coffee]
      }
    case ActionTypes.RESET_CART:
      return {
        ...state,
        coffees: []
      }
    case ActionTypes.COFFEES :
      return {...state}
    case ActionTypes.REMOVE_COFFEE_AT_CART :
      return { 
        ...state,
        coffees: state.coffees.filter(item => item.id !== action.payload.id)
      }
    case ActionTypes.UPDATE_COFFEE_QUANTITY_AT_CART:
      return {
        ...state,
        coffees : state.coffees.map(item => {
          if(item.id === action.payload.id) {
            return { ...item,
              quantity : action.payload.quantity, 
              priceTotal : item.price * action.payload.quantity
            }
          } else { return item }
        })
      }
    default :
      return state
  }
}
