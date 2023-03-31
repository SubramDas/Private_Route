import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { data } from './Data';
import styled from 'styled-components';

const About = () => {
  return (
    <>
      <AccWrapper>
        <AccContainer>
          <Accordion>
          {data.map((d)=>(

            <AccItem id={d.id}>
              <a href={d.href}>
                {d.qstn}
                <Icon1 className='add'> <AddIcon/> </Icon1>
                <Icon2 className='remove'> <RemoveIcon/> </Icon2>
              </a>
              <Answer className='ans'>
                <p>
                  {d.ans}
                </p>
              </Answer>


            </AccItem>
          ))}
          </Accordion>
        </AccContainer>
      </AccWrapper>
    </>
  )
}

const AccWrapper=styled.div`
  position: absolute;
  /* top: 20vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
`
const AccContainer=styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5 rem;
`
const Accordion=styled.div`

`
const AccItem=styled.div`
  background-color: blue;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0.5rem 2px .5rem rgba(0,0,0,.1);
  a{
    font-size: 1.6rem;
    color: rgba(255,255,255,.8);
    text-decoration: none;
    background-color: #283042;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
  &:target .ans{
    max-height: 20rem;
  }
  &:target .add{
    display: none;
  }
  &:target .remove{
    display: block;
  }
`
const Icon2=styled.div`
  color: #e7d5ff;
  padding: 0.5rem;
  display: none;
`
const Icon1=styled.div`
color: #e7d5ff;
  padding: 0.5rem;
`
const Answer=styled.div`
  p{

    font-size: 2rem;
    padding: 2rem;
    color: rgba(255,255,255,.6);
  }
  transition: max-height 650ms;
  overflow: hidden;
  max-height: 0;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    width: .6rem;
    height: 90%;
    background-color: #8fc460;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`

export default About
