import React from 'react'
import { CarouselApp } from './Carousel'
import { FooterHome } from './Footer'

export const NavBar = () => {
  return (
    <div>
    <div style={{backgroundColor:"black",margin:"0px",padding:"0px"}}>
    <CarouselApp/> 
    <img style={{position:"absolute",top:"10px",width:"15vw",left:"60vw"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswFhxjoxLEcEZRtgyC7wWD0pIEZnVYt_FYw&usqp=CAU" alt="" srcset="" />
    </div>
    <FooterHome/>
    </div>
  )
}
