import React from 'react'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Container = styled.div`
      width: 100%;
      height: 100vh;
      display: flex;
      text-align: center;
      align-items: center;
`

const Button = styled.button`
      margin-left: auto;
      margin-right: auto;
      background-color: darkgray;
      color: white;
      font-size: 20px;
      padding: 10px 40px;
      border: none;
      border-radius: 8px;
      cursor: pointer;

`


const Pay = () => {
      const [stripeToken,setStripeToken] = useState(null);
      const history = useNavigate();
      const  onToken =(token)=>{
            setStripeToken(token)
      }
      useEffect(()=>{
            const makeRequest = async()=>{
                  try {
                        const res = axios.post("http://localhost:5000/api/checkout/payment",{
                              tokenId:stripeToken.id,
                              ammount:20000
                        })
                        console.log((await res).data)
                        history.push("/success");
                  } catch (error) {
                        console.log(error);
                  }
            }
            stripeToken && makeRequest()
      },[stripeToken,history])
  return (
    <Container>
      <StripeCheckout name='cartX'
       image='/images/payment.png'
       billingAddress
       shippingAddress
       description='Your Total Ammount Is 200$'
       amount={20000}
       token={onToken}
       stripeKey= 'pk_test_51LmrLISBxxW8xiYsfck0ZoWFFD2AkzYDQeZo7dhNfxqZJphonjEj3WcFFj7hedKN8pY6mdZAhXQ60yTrosUtieTD00TQnUck9M'
       >
            <Button>Pay</Button>
      </StripeCheckout>
            
    </Container>
  )
}

export default Pay