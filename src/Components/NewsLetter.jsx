import { Send } from "@material-ui/icons";
import React from "react";

import styled from "styled-components";

const Container = styled.div`
      height: 60vh;
      background-color: #fcf5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
`
const Title = styled.h1`
      font-size: 70px;
      font-family: 'Arima', cursive;
`

const Discription = styled.div`
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 20px;
`
const InputContainer  = styled.div`
      width: 50%;
      height: 40px;
      display: flex;
      justify-content: center;
`

const Input = styled.input`
      padding-left:14px;
      flex:2;
`

const Button  = styled.button`
      border:none;
      cursor: pointer;
      color: #ffffff;
      background-color: teal;
`
function NewsLetter()
{
      return(
            <Container>
                  <Title>
                        NewsLetter
                  </Title>
                  <Discription>
                        Get Timely Updates From Your Favourite Products
                  </Discription>
                  <InputContainer>
                        <Input placeholder="Enter Your Email Here" />
                        <Button><Send /></Button>
                  </InputContainer>
            </Container>
      )
}

export default NewsLetter;