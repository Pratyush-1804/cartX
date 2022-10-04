import React from 'react'
import styled from 'styled-components'

const Container  = styled.div`
      width:100%;
      height:100vh;
      display: flex;
      justify-content: center;
      align-items: center;
`

const Quote = styled.h1`
      font-weight: 200;
      color: teal;
      text-align: center;
      font-size: 70px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

const Success = () => {
  return (
    <Container>
      <Quote>
            YOUR PAYMNET HAVE SUCCESSFULLY DONE. THANKS FOR CHOOSING CARTX IN YOUR SERVICE
      </Quote>
    </Container>
  )
}

export default Success