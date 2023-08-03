import  { coffees }  from "../../../../utils/datas"
import { Coffee } from "../Coffee"
import { CoffeesContainer } from "./style"

export function Coffees() {
  return (
    <CoffeesContainer>
      { coffees.map( item => 
        <Coffee 
          key={item.id}
          description={item.description}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          tags={item.tags}
        />
      )}
    </CoffeesContainer>
  )
}