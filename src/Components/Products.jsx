import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './product'


const Container = styled.div`
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
`
const Products = ({cat,filters,sort}) => {
  const [product,SetProduct] = useState([]);
  const [filteredProduct,SetFilteredProduct] = useState([]);
  useEffect(()=>{
    const getProduct = async()=>{
      try {
        const res = await axios.get( cat?`http://localhost:5000/api/product?category=${cat}` :`http://localhost:5000/api/product` )
        SetProduct(res.data);
      } catch (err) {
        
      }
    }
    getProduct();
  },[cat]);


  useEffect(()=>{

  },[cat,filters])
  return (
    
    <Container>
            {popularProducts.map((item)=>(
                  <Product item = {item} key = {item.id} />
            ))}
    </Container>
  )
}

export default Products