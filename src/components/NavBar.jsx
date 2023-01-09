import React from 'react'
import { CarouselApp } from './Carousel'
import { FooterHome } from './Footer'

export const NavBar = () => {
  return (
    <div>
    <div style={{backgroundColor:"black",margin:"0px",padding:"0px"}}>
    <CarouselApp/> 
    <img style={{position:"absolute",top:"0",width:"20vw",left:"60vw"}} src="https://th.bing.com/th/id/R.f72d559c3f2c34f69f8f253314d2bf98?rik=4XzAw7DJ4OzFZA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-jl1FAkWW_Vg%2fU2qoe6y8c2I%2fAAAAAAAABJo%2f-AO1QcdnJG4%2fs1600%2fatrapalos%2bya!.png&ehk=vbeT1CaJTa45JFHZkx7L3X%2fBXmDe%2bYNIWae%2bY4MNnZI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" srcset="" />
    </div>
    <FooterHome/>
    </div>
  )
}
