import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const ImageMore = ({url}) => {
    const [pokemon, setPokemon] = useState([""]);
    const getData = async () => {
      const { data } = await axios.get(url)
      setPokemon(data);
      }
      useEffect(()=>{getData()},[url])
      
      const {sprites}=pokemon
     
    return (
      <div>
         <img src={sprites?.front_default} alt="Es la evolucion Inicial"/>
    </div>
  )
}
