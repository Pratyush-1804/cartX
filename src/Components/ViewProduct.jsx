import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "./Anouncement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewsLetter from "./NewsLetter";

const Container = styled.div`
      
`
const Wrapper = styled.div`
      display: flex;
`

const ImgContainer = styled.div`
      flex: 1;
      padding: 15px;
`

const InfoContainer = styled.div`
      flex: 1;
      padding: 0px 50px;
`

const Title = styled.h1`
      font-family: 'Arima', cursive;
`

const Description = styled.p`
      margin: 20px 0px;
      letter-spacing: 1.01px;
`
const Price = styled.span`
      font-size: 35px;
      font-family: 'Arima', cursive;
      font-weight: 600;
`

const Image =  styled.img`
      width: 80%;
      height: 50vh;
      margin-left: 30px;
      object-fit: cover;
      transition: all .7s ease-out;
      &:hover{
            margin-left: 500px;
            margin-top: 100px;
            transform: scale(2);
            
      }
`

const AddContainer = styled.div`
      margin: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 70%;
`

const AmmountContainer = styled.div`
      display: flex;
      cursor: pointer;
`
const Ammount = styled.span`
      margin: 0px 15px;
      font-weight: 600;
      height: 30px;
      width: 40px;
      border: 1px solid teal;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

`

const Button  = styled.button`
      margin: 25px 0px;
      padding: 10px 20px;
      font-size: 20px;
      background-color: teal;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      transition: all .4s ease-in-out;
      &:hover{
            transform: scale(1.11);
      }
`
function ViewProduct()
{
      return(
            <Container>
                  <Announcement/>
                  <Navbar />
                  <Wrapper>
                        <ImgContainer>
                              <Image src = "/images/mac.jpg"/>
                        </ImgContainer>
                        <InfoContainer>
                              <Title>HP 1058 NEW GENERATION LAPTOP </Title>
                              <Description>
                               i5 PROCESSOR WITH 8 GB RAM AND 256 GB SSD WITH 1TB HARDDISK BEST GAMMING EXPRIENCE BATTERY BACKUP 4 TO 5 HOURS, WINDOWS 11 WITH 2GB GRAPHIC CARD
                              </Description>
                              <Price>900$</Price>
                              <AddContainer>
                                    <AmmountContainer>
                                          <Remove style={{backgroundColor:"teal",color:"white",borderRadius:"50%"}} />
                                          <Ammount>1</Ammount>
                                          <Add style={{backgroundColor:"teal",color:"white",borderRadius:"50%"}}/>
                                    </AmmountContainer>
                                    <Button>ADD TO CART</Button>
                              </AddContainer>
                        </InfoContainer>
                  </Wrapper>
                  <NewsLetter />
                  <Footer/>
            </Container>
      )
}

export default ViewProduct;