import { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import PokemonColection from '../../component/PokemonColection'
import { IPokemon, IPokemons } from '../../types/interface'

export interface Detail {
  id: number
  isOpen: boolean
}
const HomePage = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [viewDetail, setDetail] = useState<Detail>({
    id: 0,
    isOpen: false
  })

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon')
      const pokeData = await Promise.all(
        res.data.results.map(async (pokemon: IPokemons) => {
          const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          return poke.data
        })
      )
      setPokemons(pokeData)
    }
    getPokemon()
  }, [])

  return (
    <div className='body'>
      <div className='container'>
        <header className='container-header'>
          <button className='header-btn'>Surprise Me!</button>
          <select name='Sort by' id='' className='header-select'>
            <option value='Lowest Number'>Lowest Number</option>
            <option value='Highest Number'>Highest Number</option>
            <option value='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
          </select>
        </header>
        <PokemonColection pokemons={pokemons} viewDetail={viewDetail} setDetail={setDetail} />
      </div>
    </div>
  )
}

export default HomePage
