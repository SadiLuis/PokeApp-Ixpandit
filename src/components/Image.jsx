import axios from 'axios';
import React, {  useMemo, useState } from 'react'

export const Image = ({url}) => {
    const [pokemon, setPokemon] = useState([""]);
  const getData = async () => {
    const { data } = await axios.get(url)
    setPokemon(data);
    }
    const d = useMemo(() => getData(), []);
    const {sprites,types,id}=pokemon
    
  return (
    <div>
       <img src={sprites?.front_default} alt="buscando.."/>
         <h6>{id}</h6>
        {
         types?.map((m)=>(
                      
            <h5 key={m.id}>{m.type.name}</h5>
          
         ))
        }
        
         
    </div>
  )
}
