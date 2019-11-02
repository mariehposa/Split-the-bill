import styled from 'styled-components';

export const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
   height: 45rem;
    margin: auto 0;
    box-sizing: border-box;
    justify-content: center;
    align-content: center;`

export const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #FFB884;
    border-radius: 1em;
    justify-content: space-evenly;
    width: 50%;
    height: 70%;
    align-self: center;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transition: 0.3s;`

export const StyledInnerDiv = styled.div`
    padding: .5em;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;`

export const Styledfont = styled.h3`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.0em;
    margin: 0 auto; `

export const Surround = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50%;`

export const FontDiv = styled.div`
    display: flex;
    height: 10%;
    justify-content: center;`

export const Button = styled.button`
    color: white;
    background-color: #75C22F;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.3em;
    font-family: system-ui, sans-serif;
    border-radius: 0.3em;
    padding: 0.5em;
    text-decoration: none;
    border: 0;
    cursor: pointer;`