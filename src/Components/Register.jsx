import React from "react";

import styled from "styled-components";
const Container = styled.div`
      margin: 0;
      width:100vw;
      height: 100vh;
      background-color: #cbdfe0;
      display: flex;
      justify-content: center;
      align-items: center;
`

const Wrapper = styled.div`
      padding: 20px;
      width: 40%;
`

const Title = styled.h1`
       font-family: 'Arima', cursive;
`

const Form  = styled.form`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
`

const Input = styled.input`
      flex: 1;
      min-width: 40%;
      margin: 20px 10px 0px 0px;
      padding: 5px;
      font-size: 18px;
      border: none;
      border-bottom: 1px solid black;
      background-color: transparent;
      color: teal;
     &:focus{
      outline: none;
     }
     margin-bottom: 20px;
`

const Button  = styled.button`
      font-size: 18px;
      padding: 5px;
      border: none;
      background-color: teal;
      color: white;
      border-radius: 6px;
      cursor: pointer;
`
function Register()
{
      return(
            <Container>
                  <Wrapper>
                        <Title>CREATE AN ACCOUNT</Title>
                        <Form>
                              <Input placeholder="Enter Username"/>
                              <Input placeholder="Enter Email"/>
                              <Input placeholder="Enter Password"/>
                              <Input placeholder="Confirm Password"/>
                              <Button>CREATE</Button>
                        </Form>
                  </Wrapper>
            </Container>
      )
}

export default Register;