import styled from "styled-components"

interface ButtonType {
  isSelected : boolean
}

export const OrderContainer = styled.div `
  width: 50%;
  h5 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    color: ${ props => props.theme.baseSubtitle};
    font-weight: 700;

    margin-bottom: 2rem;
  }
`

export const BaseInput = styled.input`
  padding: 0.75rem;
  background-color: ${ props => props.theme.baseInput};
  border: 1px solid ${ props => props.theme.baseButton};

  font-size: 0.875rem;
  font-weight: 400;
  color: ${ props => props.theme.baseText};
  border-radius: 6px;
  width: 100%;
  border: 1px solid transparent;

  outline-color: ${props => props.theme.yellowDark};

  &[type=text]:focus {
    outline: 2px solid  ${ props => props.theme.yellowDark};
  }
`

export const OrdeContainer = styled.div `
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme.baseCard};

  header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;

    p {
      font-size: 1rem;
      font-weight: 400;
      color: ${ props => props.theme.baseSubtitle};
    }

    span {
      font-size: 0.875rem;
      color: ${ props => props.theme.baseText};
    }
  }

  margin-bottom: 1rem;
`

export const CollectionsInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
`

export const FirstLineAdress = styled.div `
  display: grid;
  grid-template-columns: 0.3fr;
`

export const SecondLineAdress = styled.div`
  display: grid;
  grid-template-columns: 1fr;
` 

export const ThirdLineAdress = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  gap: 0.75rem;
` 

export const FourthLineAdress = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.5fr 0.2fr;
  gap: 0.75rem;
` 

export const ButtonsPayments = styled.div`
  display: grid;
  grid-template-columns: 0.33fr 0.33fr 0.33fr;
  gap: 0.75rem;
`

export const ButtonPayment = styled.button<ButtonType>`
  padding: 1rem;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 3rem;
  width: 100%;
  text-transform: uppercase;
  font-size: 0.75rem;
  border-radius: 6px;

  color: ${ props => props.theme.baseText};
  background-color: ${ props => props.theme.purpleLight };

  border-color: ${ props => props.isSelected && props.theme.purple };

  svg {
    color: ${ props => props.theme.purple};
  }

  &:hover {
    cursor: pointer;
    background-color: ${ props => props.theme.baseHover};
  }
`