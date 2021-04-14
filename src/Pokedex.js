import React, { useState } from 'react'
import MyAppBar from './MyAppBar'
import Items from './Items'
import mockData from './mockData'
import CircularProgress from '@material-ui/core/CircularProgress';

const Pokedex = (props) => {
    const [pokeData, setPokeData] = useState(mockData)

    return (
        <div>
            <MyAppBar />
            {pokeData ? <Items data={pokeData} otherData={props} /> : <CircularProgress />}
        </div>
    )
}

export default Pokedex
