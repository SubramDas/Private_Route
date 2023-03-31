import React from 'react'
import styled from 'styled-components'
import home2img from "../../images/home2.jpg"
import "../../App.css"

const Home = () => {
  return (
    <>
        <HomeWrapper>
            <TextWrapper>
                <Text1>FIND A PERSONAL</Text1>
                <Text2>SKINCARE EXPERT</Text2>
            </TextWrapper>
            <ExpertWrapper>
                <ExpertText>FIND EXPERT</ExpertText>
            </ExpertWrapper>

        </HomeWrapper>
      
    </>
  )
}

const HomeWrapper=styled.div`
    overflow-x:hidden; 
    position: absolute;
    top: 15vh;
    width: 100vw;
    height: 100vh;
    background:
        /* top, transparent black, faked with gradient */ 
        linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.3)
        ), url(${home2img});
    background-position: center;
    background-size: cover;
    background-blend-mode: darken;
`
const TextWrapper=styled.div`
  margin-left: auto ;
  margin-right: auto ;
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width:50vw;
    max-height: 50vh;
`

const Text1=styled.div`
    font-family: 'Poison';
font-style: normal;
font-weight: 400;
font-size: 50px;
line-height: 120px;
letter-spacing: 0.1em;

color: #F0F5F9;

`
const Text2=styled.div`
    font-family: 'Poison';
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 120px;
    letter-spacing: 0.1em;

    color: #F0F5F9;
`

const ExpertWrapper=styled.div`
 margin-left: auto ;
  margin-right: auto ;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    /* position: absolute; */
    width: 50%;
    height: 20%;
    left: 50%;
    top: 50%;
    border: 2px solid #F0F5F9;
`
const ExpertText=styled.div`
    font-family: 'Poison';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  /* line-height: 50px; */

  letter-spacing: 0.1em;

  color: #F0F5F9;
`

export default Home
