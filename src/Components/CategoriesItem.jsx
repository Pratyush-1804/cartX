import { Title } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Container = styled.div`
      flex: 1;
      margin: 3px;
      height: 70vh;
      position: relative;
      @media(max-width:950px)
      {
            
            text-align: center;
      }
`
const Image = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media(max-width:950px)
      {
            max-width: 80vw;
      }
      @media(max-width:536px)
      {
            width: 90%;
      }
      
`
const Info = styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
`
const Titl = styled.h1`
      color: white;
      margin-bottom: 20px;
      opacity: 5;
`
const Button = styled.button`
      border: none;
      padding: 10px;
      background-color: #fff;
      color: gray;
      cursor: pointer;
      font-weight: 600;
`
const CategoriesItem = ({item}) => {
  return (
      <Container>
            <Link to={`/products/${item.cat}`}>
                  <Image src={item.img}/>
                  <Info>
                        <Titl>{item.title}</Titl>
                        <Button>SHOP NOW</Button>
                  </Info>
            </Link>
            
      </Container>
  )
}

export default CategoriesItem