import { DatabaseOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Image } from '../components/Image';
import { actionLogoutAsyn } from '../redux/actiones/actionLogin';


import { CardDiv, CardsGrid, CardText, Fondo } from '../styles/CardStyles';
import { FooterHome } from '../components/Footer';
import { CarouselApp } from '../components/Carousel';
import { NavBar } from '../components/NavBar';
import { FooterApp } from '../components/FooterApp';


export const App = () => {
  const dispatch= useDispatch()
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0";
  const [pokemon, setPokemon] = useState([""]);
  const getData = async () => {
    const { data } = await axios.get(url)
    setPokemon(data);
    }
    
    const d = useMemo(() => getData(), []);
   const {results}=pokemon 

  return (
    <div style={{margin:"0px",padding:"0px"}} >
    
    <NavBar/>
    <CardsGrid>

      {results?.map((product) => (
        <Link to={`/detail/${product.name}`}>
        <CardDiv key={product.name}>
          <Image url={product.url} />
          <CardText>
            <h3 style={{ color: "white",backgroundColor:"black" }}>{product.name}</h3>
          </CardText>

        </CardDiv>
        </Link>
      ))}
    </CardsGrid>
   <FooterApp/>
    
    </div>
  )
}



