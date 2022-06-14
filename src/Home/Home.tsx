
import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import env from "react-dotenv";
import "./Home.scss"
import HeroSection from '../components/HeroSection/HeroSection';
const Home = () => {
  console.log(env.NFT_COLLECTIONS);
  
  
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    </div>
  )
}

export default Home