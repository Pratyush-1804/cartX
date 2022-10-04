import React, { useState } from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styled from "styled-components";
import { sliderItems } from "../data";
const Container = styled.div`
      font-family: 'Arima', cursive;
      width: 100%;
      height: 100vh;
      display: flex;
      position:relative;
      margin-top: 10px;
      overflow: hidden;
      @media (max-width:540px) {
            overflow: hidden;
      }
      @media (max-width:500px) {
            width: 500px;
            text-align: center;
      }
      
`
const Arrow = styled.div`
      width: 50px;
      height: 50px;
      background-color: #f3e9e9;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top:0;
      bottom:0;
      margin: auto;
      left:${props=> props.direction=="left" && "10px"};
      right:${props=> props.direction=="right" && "10px"};
      cursor: pointer;
      opacity: 0.5;
      z-index: 2;
`

const Wrapper = styled.div`
      height: 100%;
      display: flex;     
      transform: translateX(${props=>props.slideIndex * -100}vw);
      transition: all 1.3s ease;
      
`
const Slide = styled.div`
      display: flex;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: #${props=> props.bg};
      transition: 507ms;
      @media (max-width:979px) {
            flex-direction: column;
            width: 100vw;
      }
      @media (max-width:540px) {
            background: 100%;
      }
      @media (max-width:500px)
      {
            max-width: 100%;
      }
      
`
const ImageContainer = styled.div`
      flex:1;
      height: 100%;
      text-align: center;
      width: 100vw;
      @media (max-width:979px) {
            height: 60vh;
      }
`
const Image = styled.img`
      height: 80%;
`
const InfoContaier = styled.div`
      flex: 1;
      padding: 5px;
      @media (max-width:979px) {
            margin: -90px;
            text-align:center;
            flex-wrap: nowrap;
      }
      
`

const Title = styled.h1`
      font-size: 70px;
      @media (max-width:979px) {
            font-size: 35px;
      }
      @media (max-width:540px) {
            width: 100%;
            text-align: center;
      }

`

const Disc = styled.p`
      margin: 50px 0px;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 3px;
      @media (max-width:979px) {
            margin: -1px
      }
      @media (max-width:540px) {
            width: 100%;
            text-align: center;
      }
`

const Button = styled.button`
      font-size: 20px;
      cursor: pointer;
      padding: 10px;
      background: transparent;
      @media (max-width:979px) {
            margin-top: 20px;
      }
`
function Silder()
{
      const [slideIndex,setSlideIndex] = useState(0);
      const handleClick = (direction)=>{
            if(direction==="left")
            {
                  setSlideIndex(slideIndex > 0 ? slideIndex-1: 2);
            }
            else{
                  setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
            }
      };
      return(
            <Container>
                  <Arrow direction="left" onClick={()=> handleClick("left")}>
                       < ArrowLeftIcon/> 
                  </Arrow>
                  <Wrapper slideIndex = {slideIndex}>
                        {sliderItems.map((item)=>(
                              <Slide bg={item.bg}>
                                    <ImageContainer>
                                          <Image src={item.img} />
                                    </ImageContainer>
                                    <InfoContaier>
                                          <Title>{item.title}</Title>
                                          <Disc>{item.desc}</Disc>
                                          <Button>SHOP NOW</Button>
                                    </InfoContaier>
                              </Slide >
                        ))}
                        
                  </Wrapper>
                  <Arrow direction="right" onClick={()=>handleClick("right")}>
                       < ArrowRightIcon/> 
                  </Arrow>
            </Container>
      )
}

export default Silder;