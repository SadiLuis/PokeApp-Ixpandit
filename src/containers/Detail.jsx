import { DatabaseOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import {  Button, Descriptions } from 'antd'
import axios from 'axios'
import { useDeviceLanguage } from 'firebase/auth';
import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FooterHome } from '../components/Footer';
import { actionLogoutAsyn } from '../redux/actiones/actionLogin';
import { More } from './More';
import { useDispatch } from 'react-redux'
import { NavBar } from '../components/NavBar';

export const Detail = () => {
  const { name } = useParams()
  const dispatch=useDispatch()
  const url = (`https://pokeapi.co/api/v2/pokemon/${name}`)
  const [pokemon, setPokemon] = useState([""]);
  const getData = async () => {
    const { data } = await axios.get(url)
    setPokemon(data);
    }
    const d = useMemo(() => getData(), []);
    const [modal, setModal] = useState(false)
    const handlerMore=(id)=>{
      
      setModal(true)
}
  

  return (
    <div style={{textAlign:"center"}}>
      
    <NavBar/>
      <Descriptions title={`Detalle de ${name}`} layout="vertical" bordered>
      <Descriptions.Item label="Frente">
      <img src={pokemon.sprites?.front_default} alt="" srcSet="" />
      </Descriptions.Item>
    <Descriptions.Item label="Espalda">
    <img src={pokemon.sprites?.back_default} alt="" srcSet="" /> 
    </Descriptions.Item>
    <Descriptions.Item label="De lado">
    <img src={pokemon.sprites?.front_shiny} alt="" srcSet="" />
    </Descriptions.Item>
    <Descriptions.Item label="Peso">{pokemon?.weight}</Descriptions.Item>
    <Descriptions.Item label="Peso">{pokemon?.height}</Descriptions.Item>
    <Descriptions.Item label="Experiencia Base">{pokemon?.base_experience}</Descriptions.Item>
    <Descriptions.Item label="Nombre de especie">{pokemon.species?.name}</Descriptions.Item>
   </Descriptions>
   <Button onClick={()=>handlerMore(pokemon.id)}>Deseas agregarlo como favorito?</Button>
   {
                modal === true ? <More id={pokemon.id} urlImage={pokemon.sprites?.front_default} /> : ''
            }

  </div>
  )
}
