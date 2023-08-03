import { ReactNode, createContext, useState } from "react";

type OrderDatas = {
  number: string;
  cep: string;
  streetName: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "creditCard" | "debitCard" | "money";
}

interface OrderContext {
  order : OrderDatas | null
  createOrder : (order:OrderDatas) => void
  deleteOrder : () => void
}

interface OrderContextProvider {
  children : ReactNode
}

export const OrderContext = createContext({} as OrderContext)

export function OrderContextProvider({ children }:OrderContextProvider) {
  const [order,setOrder] = useState<OrderDatas | null>(null)

  function createOrder(newOrder: OrderDatas) {
    setOrder(newOrder)
  }

  function deleteOrder() {
    setOrder(null)
  }

  return (
    <OrderContext.Provider value={{createOrder,deleteOrder,order}}>
      { children }
    </OrderContext.Provider>
  )
}