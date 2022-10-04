import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Anouncement"
import NewsLetter from "../Components/NewsLetter"
import Footer from "../Components/Footer"
import { Add, Remove } from "@material-ui/icons";
function Cart()
{
      return(
            <Container>
                  <Announcement />
                  <Navbar/>
                  <Wrapper>
                        <Title>
                              YOUR CART
                        </Title>
                        <Top>
                              <TopButton>CONTINUE SHOPPING</TopButton>
                              <TopTexts>
                                    <Text>Shopping Bag(2)</Text>
                                    <Text>Your Wishlist (0)</Text>
                              </TopTexts>
                              <TopButton>CHECKOUT NOW</TopButton>
                        </Top>
                        <Bottom>
                              <Info>
                                    <Product>
                                          <ProductDetail>
                                                <Image src="/images/headphones.jpg" />
                                                <Details>
                                                      <ProductName><b>PRODUCT : </b> BOAT HEADPHONES</ProductName>
                                                      <ProductId><b>ID : </b>985sdfa219471dsf5aw1e151af</ProductId>
                                                      
                                                </Details>
                                          </ProductDetail>
                                          <PriceDetails>
                                                <ProductAmmountContainer >
                                                      <Add style={{cursor:"Pointer"}} />
                                                      <ProductAmmount>2</ProductAmmount>
                                                      <Remove style={{cursor:"Pointer"}} />
                                                </ProductAmmountContainer>
                                                <ProductPrice>$ 25</ProductPrice>
                                          </PriceDetails>
                                    </Product>
                                    <Product>
                                          <ProductDetail>
                                                <Image src="/images/headphones.jpg" />
                                                <Details>
                                                      <ProductName><b>PRODUCT : </b> BOAT HEADPHONES</ProductName>
                                                      <ProductId><b>ID : </b>985sdfa219471dsf5aw1e151af</ProductId>
                                                      
                                                </Details>
                                          </ProductDetail>
                                          <PriceDetails>
                                                <ProductAmmountContainer>
                                                      <Add />
                                                      <ProductAmmount>2</ProductAmmount>
                                                      <Remove />
                                                </ProductAmmountContainer>
                                                <ProductPrice>$ 25</ProductPrice>
                                          </PriceDetails>
                                    </Product>
                              </Info>
                              <Summary>
                                    <SummaryItemTitle>ORDER SUMMARY</SummaryItemTitle>
                                    <SummaryItem>
                                          <SummaryItemText>Subtotal</SummaryItemText>
                                          <SummaryItemPrice>$100</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryItem>
                                          <SummaryItemText>Total Discount</SummaryItemText>
                                          <SummaryItemPrice>$50</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryItem>
                                          <SummaryItemText>Total Price</SummaryItemText>
                                          <SummaryItemPrice>$50</SummaryItemPrice>
                                    </SummaryItem>
                                    <Button>PROCEED TO CHECKOUT</Button>
                              </Summary>
                        </Bottom>
                  </Wrapper>
                  <Footer/>
            </Container>
      )
}
const SummaryItemTitle = styled.h1`
      font-family: 'Arima', cursive;
`

const SummaryItem = styled.div`
      padding: 5px;
`

const SummaryItemText = styled.span`
      margin-right: 10px;
      font-weight: 600;
      
`
const SummaryItemPrice = styled.span`
      font-size: 18px;
      
`

const Button  =styled.button`
      margin-top: 20px;
      font-size: 14px;
      padding: 10px 20px;
      background-color: teal;
      color:white;
      cursor: pointer;
      border: none;
      border-radius: 5px;
`


const ProductAmmountContainer = styled.div`
      display: flex;
      align-items: center;
`

const ProductAmmount = styled.div`
      margin: 0px 20px;
`
const ProductPrice = styled.div`
      margin-left: 20px;
      font-size: 20px;
      font-weight: 600;
`

const Product = styled.div`
      display: flex;
      justify-content: space-between;
      border: 1px solid lightgray;
      margin-bottom: 30px;
      margin-top: 20px;
`
const ProductDetail = styled.div`
      display: flex;
      flex: 2;
`
const Image = styled.img`
      width: 30%;
      height: 30vh;
      object-fit: cover;
`
const Details = styled.div`
      margin: 0 30px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
`
const ProductName = styled.h1`
      font-family: 'Arima', cursive;
      font-size: 24px;
`
const ProductId = styled.span`
      
`

const PriceDetails  = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
`
const Info = styled.div`
      flex: 3;
`

const Summary = styled.div`
      flex: 1;
      border: 1px solid lightgray;
      border-radius: 10px;
      padding: 20px;
      height: 50vh;
      margin-left: 10px;
`
const Container = styled.div`
`

const Wrapper = styled.div`
      
`

const Title = styled.h1`
      font-family: 'Arima', cursive;
      text-align: center;
`

const Top  = styled.div`
      display: flex;
      padding: 20px;
      align-items: center;
      justify-content: space-between;
      padding: 40px;
`

const TopButton = styled.button`
      padding: 10px;
      font-weight: 300;
      cursor: pointer;
      border: none;
      background-color: #005665;
      color: white;
      border-radius: 6px;
      
`

const Bottom  =styled.div`
      display: flex;
      justify-content: space-between;
      padding: 0 40px;
`

const TopTexts = styled.div`
      
`
const Text = styled.span`
      text-decoration: underline;
      cursor:pointer;
      color: #274f99;
      margin-right: 20px;
`


export default Cart;