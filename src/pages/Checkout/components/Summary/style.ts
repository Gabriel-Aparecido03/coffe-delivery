import styled from "styled-components";

export const SummaryContainer = styled.div`
  width: 40%;
  h5 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    color: ${ props => props.theme.baseSubtitle};
  }
`
export const SummaryPrices = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2.5rem;
  background-color: ${ props => props.theme.baseCard};
  border-radius: 6px 44px;
`

export const ItensPriceSummary = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  gap: 0.75rem;
`

export const ItensPrices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  color: ${ props => props.theme.baseText};
  p {
    font-size: 0.875rem;
  }

  span {
    font-size: 1rem;
  }
`

export const ItensPriceTotal = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${ props => props.theme.baseSubtitle};
  font-weight: 700;
  font-size: 1.25rem;
  border: 0;
`

export const ButtonBuy = styled.button `
  background-color: ${ props => props.theme.yellow};
  border: 0;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 800;
  padding: 0.75rem 0.5rem;
  margin-top: 0.75rem;
  color: ${ props => props.theme.white};

  transition: background-color 0.3s;

  &:hover {
    background-color: ${ props => props.theme.yellowDark};
    cursor: pointer;
  }
`