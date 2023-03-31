import React from 'react'
import styled from 'styled-components'
import home1 from "../../images/home2.jpg"
import home3 from "../../images/home3.jpg"
import home2 from "../../images/home4.jpg"
import home4 from "../../images/home5.jpg"

const Contact = () => {
  return (
    <>
        <Sliders>
          <Slides>
          <Radios>
            <input type="radio" name='radio-btn' id='radio1' />
            <input type="radio" name='radio-btn' id='radio2' />
            
            <input type="radio" name='radio-btn' id='radio3' />
          </Radios>
    <Imagee>
            <div className="slide">
              <img src={home4} alt="" />
            </div>
            <div className="slide">
              <img src={home3} alt="" />
            </div>
            <div className="slide">
              <img src={home2} alt="" />
            </div>
    </Imagee>
          </Slides>
        </Sliders>
    </>
  )
}

const Sliders=styled.div`
`
const Slides=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20vh;
  position: absolute  ;
  width: 100%;
  flex-direction: column-reverse;
`
const Imagee=styled.div`
display: flex;
img{

  /* position: absolute; */
  width: 50vw;
  height: 50vh;
  top: 30vh;
  object-fit: cover;
}
.slide{
  width: 20%;
  transition: 2s;
}
`
const Radios=styled.div`
 input{
  display: none;
 }
`


export default Contact
