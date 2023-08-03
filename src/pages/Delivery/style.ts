import styled from "styled-components"

export const DeliveryContainer = styled.div`
  display: flex;
  gap: 6.5rem;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`

export const DeliveryDatas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ImageContainer = styled.div``

export const TitleContainer = styled.div`
  h4 {
    color: ${props => props.theme.yellowDark};
    font-family: Baloo 2;
    font-size: 2rem;
    font-weight: 800;
  }

  span {
    font-size: 1.25rem;
    color: ${props => props.theme.baseTitle};
  }
`

export const StepsContainer = styled.div`
  border: 1px solid transparent;
  border-radius: 6px 36px;
  border-image: linear-gradient(45deg, rgb(219, 172, 44), rgb(128, 71, 248)) 1;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  align-items: flex-start;
`

interface ItemsDeliveryColor {
  variant : string
}

export const ItemsDelivery = styled.div<ItemsDeliveryColor>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div:first-child {
    background-color: ${props => props.variant};
    padding: 0.5rem;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  span,p {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme.baseText};
  }
`
