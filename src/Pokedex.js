import React, { useState, useEffect } from 'react'
import MyAppBar from './MyAppBar'
import Items from './Items'
import CircularProgress from '@material-ui/core/CircularProgress';

const Pokedex = (props) => {
    const [pokeData, setPokeData] = useState({})
    
    useEffect(() => {
        const getPokemon = async () => {
            try {
                const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=28")
                const data = await response.json()
                const { results } = data
                const newPokemonData = {}

                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                    }
                })

                setPokeData(newPokemonData)
            }

            catch(e) {
                console.log("Error: ", e.message)
            }
        }
        getPokemon();
        
    }, [])

    return (
        <div>
            <MyAppBar />
            {pokeData ? <Items data={pokeData} /> : <CircularProgress />}
        </div>
    )
}

export default Pokedex
