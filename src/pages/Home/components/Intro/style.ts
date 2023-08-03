import styled from "styled-components"

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  background-image: url('../../../../assets/Background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 104px);
` 

export const InfosContainer = styled.div`
  h4 {
    font-family: 'Baloo 2';
    color: ${props => props.theme.baseTitle};
    font-size: 3rem;
    font-weight: 800;
  }

  h6 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.theme.baseSubtitle};
  }
`

export const StrongPointsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  column-gap: 2rem;
  row-gap: 2rem;
  margin-top: 3rem;
`

interface StrongItemTypes {
  variant : string;
}

export const StrongItem = styled.div<StrongItemTypes> `
  display: flex;
  align-items: center;
  gap: 0.5rem;
  div {
    background-color: ${props => props.variant};
    padding: 0.5rem;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme.baseText};
  }
`