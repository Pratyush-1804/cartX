import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Announcement from "./Anouncement";
import Slider from "./Slider";
import Categories from "./Categories";
import Products from "./Products";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

function Home()
{
      return(
           
                  <>
                        <Announcement />
                        <Navbar />
                        <Slider />
                        <Categories/>
                        <Products />
                        <NewsLetter/>
                        <Footer />
                  </>
      )
}

export default Home;