import React, { useEffect, useState } from 'react'
import { IPokemon } from '../types/interface'
import './pokemoncolect.css'
import { Detail } from '../pages/HomePages';

interface IProps {
  pokemons: IPokemon[],
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>
}

const PokemonColection: React.FC<IProps> = (props) => {
  const { pokemons, viewDetail, setDetail } = props
  
  const selectPokemon = (id: number) => {
    
  }
  return (
    <>
      <section className='colection-container'>
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className='pokemon-item' onClick={()=>selectPokemon(pokemon.id)}>
            <img src={pokemon.sprites.front_default} className='pokemon-img' alt='' />
            #<span>{pokemon.id}</span>
            <p className='pokemon-title'>{pokemon.name}</p>
            <p className='pokemon-type'>
              {pokemon.types.map((item: any) => (
                <button className='pokemon-type-btn'>{item.type.name}</button>
              ))}
            </p>
          </div>
        ))}
      </section>
    </>
  )
}

export default PokemonColection
