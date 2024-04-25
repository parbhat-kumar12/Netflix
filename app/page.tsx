"use client"
import { SiAnycubic } from 'react-icons/si'
import Colum1 from './component/Colum1'
import Navbar from './component/Navbar'
import Colum2 from './component/Colum2'
import Askqution from './component/Askqution'
import Footer from './component/Footer'
import { Router } from 'next/router'


const page = () => {
  return (
      
    <>
    
     
      <Navbar/>
      <Colum1 
      heading="Enjoy on your TV"
      pargraph="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      img="/img/tv2.png"
      />
      <Colum2
       heading="Download your shows to watch offline"
       pargraph="Save your favourites easily and always have something to watch."
       img="/img/mobile.jpg"
       
       />
        <Colum1 
      heading="Watch everywhere"
      pargraph="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      img="/img/tv.png"
      />
       <Colum2
       heading="Create profiles for kids"
       pargraph="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
       img="/img/cartoon.png"
       
       />
    <Askqution/>
    <Footer/>
    

    </>
  )
}

export default page
