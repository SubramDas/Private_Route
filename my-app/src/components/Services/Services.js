import React from 'react'
import styled from 'styled-components'
import featuredPortfolio from "../../data"
const Services = () => {

  const list=[
    {
      id: "featured", title:"Featured",
    },
    {
      id: "web", title:"Web App",
    },
    {
      id: "mobile", title:"Mobile App",
    },
    {
      id: "design", title:"Design",
    },
    {
      id: "content", title:"Content "
    }
  ]
  return (
    <>
    <Card>
      <CardContainer>
        <CardText>
        BANKING
        </CardText>
        <CardImg src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU">
        </CardImg>
        {/* {
          list.map(item=>(
            <CardList title={item.title} ></CardList>
          ))
        } */}
      </CardContainer>
      <CardContainer>
        <CardText>
        BANKING
        </CardText>
        <CardImg src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU">
        </CardImg>
        {/* {
          list.map(item=>(
            <CardList title={item.title} ></CardList>
          ))
        } */}
      </CardContainer>
      <CardContainer>
        <CardText>
        BANKING
        </CardText>
        <CardImg src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU">
        </CardImg>
        {/* {
          list.map(item=>(
            <CardList title={item.title} ></CardList>
          ))
        } */}
      </CardContainer>
    </Card>
        
      
    </>
  )
}

const Card=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 20vh;
  height: 80vh;
  /* flex-wrap: wrap; */
`
const CardContainer=styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const CardImg=styled.img`
  
  width: 20vw;
  height: 30vh;
  border-radius: 1.5rem;
  border:  2px solid red;
  margin: 2vh 2vw ;
  display: flex;
  justify-content: center;
  object-fit: cover;
  z-index: 1;
  &:hover{
    background-color: grey;
    z-index: 0;
    opacity: 0.2;
  }
`
const CardText=styled.div`
position: absolute;
align-items: center;
 width: 20vw;
  height: 30vh;
  border-radius: 1.5rem;
  /* border:  2px solid red; */
  margin: 2vh 2vw ;
  display: flex;
  justify-content: center;
  /* position: absolute; */
  font-size: 3.5rem;
`


export default Services
