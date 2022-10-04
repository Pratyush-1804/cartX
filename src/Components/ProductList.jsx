import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "./Anouncement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewsLetter from "./NewsLetter";
import Product from "./product";
import Products from "./Products";
const Container = styled.div`
      
`
const Title = styled.h1`
      font-family: 'Arima', cursive;
      margin: 20px;

`

const FilterContainer = styled.div`
      display: flex;
      justify-content: space-between;

`

const Filter = styled.div`
      margin-right: 20px; 
      margin-left: 20px;
      font-size: 20px;
      font-weight: 600;
`
const Select  = styled.select`
      padding: 10px;
      margin-right: 10px;
      margin-left: 10px;
`
const Option  = styled.option`
      
`
function ProductList()
{
      const location = useLocation();
     const cat = location.pathname.split("/")[2];
     const [filters,setFilters] = useState({});
     const [sort,setSort] = useState();

     const handleFilters = (e)=>{
      const value = e.traget.value;
      setFilters({
            ...filters,
            [e.traget.name]:value
      });
     };
     console.log(filters);
      return(
            <Container>
                  <Announcement />
                  <Navbar />
                  
                  <Title>Dresses</Title>
                  <FilterContainer>
                        <Filter>FILTER PRODUCTS:
                        <Select name="TYPE" onChange={handleFilters}>
                              <Option disabled >Select</Option>
                              <Option>Electronics</Option>
                              <Option>Men Style</Option>
                              <Option>Women Style</Option>
                              <Option>Laptop</Option>
                              <Option>Headphones</Option>
                              <Option>Kitchen </Option>
                              <Option>Cycle </Option>
                        </Select>
                        </Filter>
                       
                        <Filter>SORT PRODUCTS:
                              <Select name="SORT" onChange={(e)=>{
                                    setSort(e.target.value)
                              }}>
                                    <Option disabled >Sort</Option>
                                    <Option value="newest">Newest</Option>
                                    <Option value="price">Price</Option>
                                    <Option value="brands">Brand</Option>
                              </Select>
                        </Filter>
                  </FilterContainer>
                  <Products cat={cat} filters={filters} sort={sort} />
                  <NewsLetter />
                  <Footer />
            </Container>
      )
}

export default ProductList;