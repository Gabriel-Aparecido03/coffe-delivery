import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageSvg from '../../assets/delivery.svg'
import { DeliveryContainer, DeliveryDatas, TitleContainer, StepsContainer, ItemsDelivery, ImageContainer } from './style'
import { OrderContext } from '../../context/OrderContext'
import { useContext } from 'react'

export function Delivery() {

  const { order } = useContext(OrderContext)

  return (
    <DeliveryContainer>
      <DeliveryDatas>
        <TitleContainer>
          <h4>Uhu! Pedido confirmado</h4>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </TitleContainer>
        <StepsContainer>
          <ItemsDelivery variant='#C47F17'>
            <div><ShoppingCart size={16} color='#fff' weight='fill'/></div>
            <div>
              <span>Entrega em Rua João Daniel Martinelli, 102</span>
              <p>{ order?.neighborhood} - {order?.city },{order?.state }</p>
            </div>
          </ItemsDelivery>
          <ItemsDelivery variant='#DBAC2C'>
            <div><Timer size={16} color='#fff' weight='fill'/></div>
            <div>
              <span>Previsão de entrega</span>
              <p><strong>20 min - 30 min</strong></p>
            </div>
          </ItemsDelivery>
          <ItemsDelivery variant='#574F4D'>
            <div><Package size={16} color='#fff' weight='fill'/></div>
            <div>
              <span>Embalagem mantém o café intacto</span>
            </div>
          </ItemsDelivery>
          <ItemsDelivery variant='#8047F8'>
            <div><Coffee size={16} color='#fff' weight='fill'/></div>
            <div>
              <span>Pagamento na entrega</span>
              <p>
                { order?.paymentMethod === "creditCard" && <strong>Cartão de crédito</strong>}
                { order?.paymentMethod === "debitCard" && <strong>Cartão de débito</strong>}
                { order?.paymentMethod === "money" && <strong>Dinheiro</strong>}
              </p>
            </div>
          </ItemsDelivery>
        </StepsContainer>
      </DeliveryDatas>
      <ImageContainer>
        <img src={imageSvg} alt="" />
      </ImageContainer>
    </DeliveryContainer>
  )
}