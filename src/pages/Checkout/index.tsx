import { useContext } from "react";
import { Order } from "./components/Order";
import { Summary } from "./components/Summary";
import { CheckoutContainer } from "./style";
import { OrderContext } from "../../context/OrderContext";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";


const PaymentTypeSchema = z.union([
  z.literal('creditCard'),
  z.literal('debitCard'),
  z.literal('money')
])

const newOrderFormValidationSchema = z.object({
  cep : z.string(),
  streetName:z.string(),
  number:z.string(),
  complement:z.string(),
  neighborhood:z.string(),
  city:z.string(),
  state:z.string(),
  paymentMethod :  PaymentTypeSchema
})

type NewOrderFormType = z.infer<typeof newOrderFormValidationSchema>

export function Checkout() {

  const navigate = useNavigate()

  const { createOrder } = useContext(OrderContext)
  const cartContext = useCart()

  const newOrderForm = useForm<NewOrderFormType>({
    resolver : zodResolver(newOrderFormValidationSchema)
  })

  const { handleSubmit,reset } = newOrderForm

  function handleCreateOrder(data : NewOrderFormType) {
    createOrder(data)
    cartContext.resetCart()
    reset()
    navigate('/delivery')
  }

  return (
    <FormProvider {...newOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleCreateOrder)}>
        <Order />
        <Summary />
      </CheckoutContainer>
    </FormProvider>
  )
}