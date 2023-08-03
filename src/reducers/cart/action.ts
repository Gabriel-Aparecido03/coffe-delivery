import { CoffeeCart } from "../../context/CartContext";

export enum ActionTypes {
  ADD_COFFEE_AT_CART = 'ADD_COFFEE_AT_CART',
  REMOVE_COFFEE_AT_CART = 'REMOVE_COFFEE_AT_CART',
  UPDATE_COFFEE_QUANTITY_AT_CART = 'UPDATE_COFFEE_QUANTITY_AT_CART',
  COFFEES = 'COFFEES',
  RESET_CART = 'RESET_CART'
}

export function addCoffeeAtCartAction(coffee : CoffeeCart) {
  return {
    type : ActionTypes.ADD_COFFEE_AT_CART,
    payload : {
      coffee
    }
  }
}

export function removeCoffeeAtCartAction(id : number) {
  return {
    type : ActionTypes.REMOVE_COFFEE_AT_CART,
    payload : {
      id
    }
  }
}

export function updateCoffeeQuantityAtCartAction(id:number,quantity:number) {
  return {
    type : ActionTypes.UPDATE_COFFEE_QUANTITY_AT_CART,
    payload : {
      id,
      quantity
    }
  }
}

export function CoffeesAction() {
  return {
    type : ActionTypes.COFFEES
  }
}

export function resetCartAction() {
  return {
    type : ActionTypes.RESET_CART
  }
}