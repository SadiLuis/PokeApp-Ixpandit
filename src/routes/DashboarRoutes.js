import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { App } from '../containers/App'
import { Detail } from '../containers/Detail'
import { ListComment } from '../containers/ListComment'
import {  SearchPokemon } from '../containers/Search'

export const DashboarRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<App/>}/> 
    <Route path='/detail/:name' element={<Detail/>}/>
    <Route path='/comments' element={<ListComment/>}/> 
    <Route path='/search' element={<SearchPokemon/>}/> 
   </Routes>
    
  )
}
