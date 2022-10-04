import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
function Navbar()
{
      return(
            <Container>
                  <Wrapper>
                        <Left>
                              <Language>
                                    IN
                              </Language>
                              <SearchContainer>
                                          <Input/>
                                          <i class="fas fa-search" style={{fontSize:"16px"}}></i>
                              </SearchContainer>
                        </Left>
                        <Center>
                              <Logo>
                                    CartX
                              </Logo>
                        </Center>
                        
                        <Right>
                              <MenuItem>
                                    REGISTER
                              </MenuItem>
                              <MenuItem>
                                    SIGN IN
                              </MenuItem>
                              <MenuItem>
                              <Badge badgeContent={4} color="primary">
                                    <ShoppingCartOutlined/>
                              </Badge>
                              
                              </MenuItem>
                        </Right>
                  </Wrapper>
                  
            </Container>
      )
}

const Container = styled.div`
      font-family: 'Arima', cursive;
      @media (max-width:730px) {
            width: 100%;
      }
`
const Wrapper = styled.div`
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      height: 30px;
      align-items: center;
      @media (max-width:515px)
      {
            width: 100%;
            justify-content: space-between;
      }
      @media (max-width:453px)
      {
            width: 100%;
            justify-content: space-between;
      }
`

const Left = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
`
const Language = styled.span`
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
`
const Center = styled.div`
      flex: 1;
      font-weight: 700;
      text-align: center;
      @media (max-width:730px) {
            display: none;
      }
`
const Right = styled.div`
     flex: 1;
     display: flex;
     align-items: center;
     justify-content: flex-end;
`

const SearchContainer = styled.div`
      border: .5px solid lightgray;
      padding: 5px;
      display: flex;
      align-items: center;
      margin-left: 25px;
      font-weight: 700;
`

const Input = styled.input`
      border: none;
`

const Logo = styled.h1`
      font-weight: bold;
`

const MenuItem = styled.div`
      font-size: 14px;
      cursor: pointer;
      margin-left: 25px;
      font-weight: 700;
`

export default Navbar;