import axios from 'axios';
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import { Image } from '../components/Image';
import { CardDiv, CardsGrid, CardText } from '../styles/CardStyles';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../components/NavBar';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


export const SearchPokemon = () => {
    const dispatch= useDispatch()
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0";
  const [pokemon, setPokemon] = useState([""]);
  const [key, setKey] = useState();
  const getData = async () => {
    const { data } = await axios.get(url)
    setPokemon(data);
    }
    
   const d = useMemo(() => getData(), []);
   const {results}=pokemon 
  

    const onSearch = (value) => {
        
        console.log(value)
        value = value.toLocaleLowerCase()
        setKey(value)
       
    }
    console.log(results)
    const data= results?.filter(r => r.name.toLocaleLowerCase().includes(key))
    

  return (
    <div>
     <NavBar/>  
    
    <Search placeholder="Ingrese el nombre del Pokémon que dese buscar" onSearch={onSearch} enterButton />
   
   
  
         <div>
    <CardsGrid>

      {data?.map((product) => (
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
   
 
    </div>

    </div>
  )
}






