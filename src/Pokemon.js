import React from 'react'

const Pokemon = (props) => {
    const { match } = props
    const { params } = match
    const { pokemonId } = params

    return (
        <div>
            {`Pokemon Page For ${pokemonId}`}
        </div>
    )
}

export default Pokemon
