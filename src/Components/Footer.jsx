import { Email, Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
      display: flex;
      @media (max-width:680px) {
            justify-content: space-around;
      }
`
const Left = styled.div`
      flex: 1 ;
      display: flex;
      flex-direction: column;
      padding: 20px;
      font-family: 'Arima', cursive;
      @media (max-width:680px) {
            display: none;
      }
`

const Center = styled.div`
      flex:1 ;
      @media (max-width:680px) {
            width: 60vw;
            padding: 20px;
      }
`

const Title = styled.h3`
      margin-bottom: 25px;
      font-family: 'Arima', cursive;

`

const List = styled.ul`
      margin: 0;
      padding:0;
      list-style:none;
      display: flex;
      flex-wrap: wrap;
      
`

const ListItem = styled.li`
      width: 50%;
      margin-bottom: 7px;
`

const Right = styled.div`
      flex:1 ;
      @media (max-width:680px) {
            width: 30vw;
      }
`

const Logo = styled.h1`
      
`
const Desc = styled.p`
      
`

const SocialContainer = styled.div`
      display: flex;
      @media (max-width:680px) {
            display: none;
      }
`
const SocialIcon = styled.div`
      width: 40px;
      height: 40px;
      color: white;
      background-color: #${props =>props.color};
      border-radius: 50%;
      display: flex;    
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      &:hover{
            transform: scale(1.12);
      }
`

const ContactItem = styled.div`
      display: flex;
      align-items: center;
`

const Payment = styled.img`
      width: 200px;
      object-fit: cover;
      height: 40px;
      margin-top:20px;
`

function Footer()
{
      return(
            <Container>
                  <Left>
                        <Logo>
                              CartX
                        </Logo>
                        <SocialContainer>
                              <SocialIcon  color = "3B5999">
                                    <Facebook />
                              </SocialIcon>
                              <SocialIcon color = "E4405f" >
                                    <Instagram />
                              </SocialIcon>
                              <SocialIcon color = "55ACEE">
                                     <Twitter  />
                              </SocialIcon>
                             
                        </SocialContainer>
                  </Left>
                  <Center>
                        <Title>
                              Important Links
                        </Title>
                        <List>
                              <ListItem>Home</ListItem>
                              <ListItem>Cart</ListItem>
                              <ListItem>Man Fashion</ListItem>
                              <ListItem>Women Fashion</ListItem>
                              <ListItem>Accessiries</ListItem>
                              <ListItem>My Account</ListItem>
                              <ListItem>Order Tracking</ListItem>
                              <ListItem>Wishlist</ListItem>
                              <ListItem>Terms</ListItem> 
                        </List>
                  </Center>
                  <Right>
                        <Title>Contact</Title>
                        <ContactItem><MailOutline style={{marginRight:"10px",marginTop:"10px"}} />  cartX@gmail.com</ContactItem>
                        <ContactItem><Phone style={{marginRight:"10px",marginTop:"10px"}}/> +919897824348</ContactItem>
                        <ContactItem><Room style={{marginRight:"10px",marginTop:"10px"}}/>Main Office New Delhi</ContactItem>
                        <Payment src="/images/payment.png" />
                  </Right>
            </Container>
      )     
}

export default Footer;