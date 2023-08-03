import styled from "styled-components"

export const CoffeeContainer = styled.div`
  background-color: ${props => props.theme.baseCard};
  border-radius: 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 16rem;
`

export const CoffeeImageContainer = styled.div`
  position: relative;
  height: 5.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    height: 7.5rem;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-50%,-50%);
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    align-items: center;
  }

  
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    padding: 0.25rem;
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
    color: ${props => props.theme.yellowDark};
    background-color: ${props => props.theme.yellowLight};
    border-radius: 100px;
    text-align: center;
  }
`

export const InfoCoffeeContainer = styled.div`
  p {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme.baseSubtitle};
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${props => props.theme.baseLabel};
  }
`

export const PriceCoffeeContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  color: ${ props => props.theme.baseText};
  span {
    font-size: 0.875rem;
  }

  p {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 800;
  }
`

export const ButtonsActions = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
`

export const ButtonQuantity = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 6px;
  width: 4.5rem;
  border: none;
  background-color: ${ props => props.theme.baseButton};

  color: ${props => props.theme.baseTitle};

  svg {
    color: ${props => props.theme.purple};
  }

  transition:background-color 0.3s;

  svg:hover {
    color : ${props => props.theme.purpleDark};
    cursor: pointer;
  }

  &:hover {
    background-color: ${props => props.theme.baseHover};
    cursor: pointer;
  }
`

export const AddToCart = styled.button`
  padding: 0.5rem;
  width: 2.375rem;
  background-color: ${props =>  props.theme.purpleDark};
  border: none;
  border-radius: 6px;

  svg {
    color: ${props => props.theme.white};
  }

  transition : background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.purple};
    cursor: pointer;
  }
`