import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { OrderContainer, OrdeContainer, FirstLineAdress, BaseInput, SecondLineAdress, ThirdLineAdress, FourthLineAdress, ButtonPayment, CollectionsInputs, ButtonsPayments } from "./style";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
type paymentMethod = 'creditCard' | 'debitCard' | 'money' | null 

export function Order() {

  const [selectedPayment,setSelectedPayment] = useState<paymentMethod>(null)
  const { register,control } = useFormContext()
  return (
    <OrderContainer>
      <h5>Complete seu pedido</h5>
      <OrdeContainer>
        <header>
          <MapPin />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </header>
        <CollectionsInputs>
          <FirstLineAdress>
            <BaseInput placeholder="CEP" type="text"  id="" {...register('cep')}/>
          </FirstLineAdress>
          <SecondLineAdress>
            <BaseInput placeholder="Rua" type="text" id="" {...register('streetName')}/>
          </SecondLineAdress>
          <ThirdLineAdress>
            <BaseInput placeholder="Número" type="text" id="" {...register('number')}/>
            <BaseInput placeholder="Complemento" type="text" id="" {...register('complement')}/>
          </ThirdLineAdress>
          <FourthLineAdress>
            <BaseInput placeholder="Bairro" type="text" id="" {...register('neighborhood')}/>
            <BaseInput placeholder="Cidade" type="text" id="" {...register('city')}/>
            <BaseInput placeholder="Estado" type="text" id="" {...register('state')}/>
          </FourthLineAdress>
        </CollectionsInputs>
      </OrdeContainer>
      <OrdeContainer>
      <header>
          <CurrencyDollar />
          <div>
            <p>Pagamento</p>
            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          </div>
        </header>
        <div>
          <>
            <Controller 
              name="paymentMethod"
              control={control}
              render={({field: { onChange}}) => {
                return (
                 <ButtonsPayments >
                  <ButtonPayment
                      type="button"
                      onClick={
                        ()=>{setSelectedPayment('creditCard');
                        onChange('creditCard')
                      }}
                      isSelected={selectedPayment === "creditCard"}
                      value="creditCard"
                    >
                      <CreditCard />
                      Cartao de crédito
                    </ButtonPayment>
                    <ButtonPayment
                      type="button"
                      onClick={()=>{
                        setSelectedPayment('debitCard')
                        onChange('debitCard')
                      }}
                      isSelected={selectedPayment === "debitCard"}
                      value="debitCard"
                    >
                      <Bank />
                      Cartao de débito
                    </ButtonPayment>
                    <ButtonPayment
                      type="button"
                      onClick={()=>{
                        setSelectedPayment('money')
                        onChange('money')
                      }}
                      isSelected={selectedPayment === "money"}
                      value="money"
                    >
                      <Money />
                      Dinheiro
                    </ButtonPayment>
                 </ButtonsPayments>
                )
              }}
            />
          </>
        </div>
      </OrdeContainer>
    </OrderContainer>
  )
}