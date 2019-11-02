import styled from 'styled-components';

export const ParentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;
    margin: 1.5em;
    background-color: #FFB884;
    box-shadow: 0 16px 16px 0 rgba(0,0,0,0.2);`

export const OuterDiv = styled.div`
    display: flex;
    background-color: white;
    height: 100vh;
    flex-basis: 100%;
    justify-content: space-around;
    align-items: center;`

export const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 90%;
    height: 90%;
    justify-content: space-between;
    align-self: center;`

export const Button = styled.button`
    color: white;
    background-color: #75C22F;
    text-transform: uppercase;
    margin: 1.5em;
    text-align: center;
    font-size: 1em;
    font-family: system-ui, sans-serif;
    border-radius: 0.3em;
    padding: 0.5em;
    text-decoration: none;
    border: 0;
    cursor: pointer;`
