import styled from "styled-components";
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header `
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 104px;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: stretch;
  }

  img {
    cursor: pointer;
  }
`

export const ContainerLoalizator = styled.span `
  background-color: ${props => props.theme.purpleLight};
  color: ${props => props.theme.purpleDark};
  font-size: 0.875rem;
  font-weight: 400;
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ButtonCart = styled(Link)`
  border-radius: 6px;
  background-color: ${props => props.theme.yellowLight};
  padding: 0.5rem;
  color: ${props => props.theme.yellowDark};
  position: relative;
  border: none;
  cursor: pointer;

`

export const BadgeQuantityCart = styled.div`
  background-color: ${props => props.theme.yellowDark};
  width: 1.25rem;
  height: 1.25rem;
  
  border-radius: 50%;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  border: none;

  span {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: ${props => props.theme.white};
    font-weight: 700;
  }
`