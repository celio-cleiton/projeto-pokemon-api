import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsPage from '../pages/PokemonDetailPage/PokemonDetailPage'
import HomePage from '../pages/PokemonsListPage/PokemonsListPage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/page/:page" element={<HomePage />}/>
        <Route path='/detail/:pokemonName' element={<DetailsPage />}/>
        <Route path="/pokedex" element={<PokedexPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router