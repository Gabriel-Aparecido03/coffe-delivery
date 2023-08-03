import { CartContext } from "../context/CartContext";
import { useContext } from 'react'

export function useCart() {
  const cart = useContext(CartContext) 
  return cart
}