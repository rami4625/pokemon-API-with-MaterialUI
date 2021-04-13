import React, { useState, useEffect } from 'react'
import MyAppBar from './MyAppBar'
import Items from './Items'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

const Pokedex = (props) => {
    const [pokeData, setPokeData] = useState({})

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=28`)
            .then(function (response) {
                const { data } = response
                const { results } = data
                const newPokemonData = {}
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                    }
                })
                console.log(newPokemonData)
                setPokeData(newPokemonData)
            })
    }, [])

    return (
        <div>
            <MyAppBar />
            {pokeData ? <Items data={pokeData} otherData={props} /> : <CircularProgress />}
        </div>
    )
}

export default Pokedex
