import styled from "styled-components"

export const CoffeeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  border-bottom: 1px solid ${props => props.theme.baseButton};
  padding: 1.5rem 0;
` 

export const CoffeeInfos= styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CoffeInfosTitle = styled.div`
  p {
    font-size: 1rem;
    color: ${ props => props.theme.baseSubtitle};
  }

  span {
    font-size: 1rem;
    font-weight: 700;
    color: ${ props => props.theme.baseText};
  }
`

export const ButtonsActions = styled.button`
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  justify-content: flex-start;
  margin-top: 0.5rem;
  background: transparent;
  border: none;
`


export const ButtonQuantity = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 6px;
  width: 4.5rem;
  background-color: ${ props => props.theme.baseButton};
  color: ${props => props.theme.baseTitle};
  border: 0;
  svg {
    color: ${props => props.theme.purple};
  }

  transition:background-color 0.3s;

  svg:hover {
    color : ${props => props.theme.purpleDark};
    cursor: pointer;
  }

  
`

export const ButtonDelete = styled.button`
  background-color: ${ props => props.theme.baseButton};
  text-transform: uppercase;
  font-size: 0.75rem;
  padding: 0.5rem;
  color: ${ props => props.theme.baseText};
  border-radius: 6px;
  width: 6.5rem;
  border: 0;

  svg {
    color : ${props => props.theme.purple}
  }

  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;

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