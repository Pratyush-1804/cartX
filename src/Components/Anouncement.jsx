import React from "react";
import styled from "styled-components";


const Container = styled.div`
      background-color: teal;
      height: 30px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 500;
      @media (max-width:540px) {
            width: 540px;
      }
`
function Announcement()
{
      return(
            <Container>
                  Super Deal! Free Shipping On More Then 500 Rupee.
            </Container>
      )
}

export default Announcement;