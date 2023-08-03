import { useSummary } from "../../../../hooks/useSummary";
import { ButtonBuy, ItensPriceSummary, ItensPriceTotal, ItensPrices, SummaryContainer, SummaryPrices } from "./style";
import { useCart } from "../../../../hooks/useCart";
import { Coffee } from "../Coffee";
import { coinFormatter } from "../../../../utils/formatter";


export function Summary() {

  const sum = useSummary()
  const { coffees} = useCart()
  
  return (
    <SummaryContainer>
        <h5>Cafés Selecionados</h5>
        <SummaryPrices>
          { coffees.map( item =>(
            <Coffee 
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
          <ItensPriceSummary>
            <ItensPrices >
              <span>Total itens</span>
              <p>{ coinFormatter.format(sum) }</p>
            </ItensPrices>
            <ItensPrices >
              <span>Entrega</span>
              <p>R$ 3.50</p>
            </ItensPrices>
            <ItensPriceTotal >
              <span>Total</span>
              <p>{ coinFormatter.format(sum + 3.50) }</p>
            </ItensPriceTotal>
          </ItensPriceSummary>
          <ButtonBuy type="submit">Confirmar pedido</ButtonBuy>
        </SummaryPrices>
    </SummaryContainer>
  )
}