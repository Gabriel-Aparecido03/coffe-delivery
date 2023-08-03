import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useSummary() {

  const { coffees } = useContext(CartContext)

  let sum = 0;

  coffees.map(( item ) => sum += item.priceTotal)

  return sum
}