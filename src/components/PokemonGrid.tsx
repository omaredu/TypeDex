import React, { Component } from 'react'
import PokemonView from './PokemonView'

import { Pokemon } from '../classes'

type GridStates = {
    list: Array<Object>,
    loading: boolean
}

export default class PokemonGrid extends Component<{}, GridStates> {

    state = {
        list: [],
        loading: true
    }

    async componentDidMount() {
        let pokemonList = await Pokemon.getList(20, 0)
        
        this.setState({list: pokemonList, loading: false})
    }
    
    render() {
        return(
            <div>
                {
                    !this.state.loading ?
                        //@ts-ignore
                        this.state.list.map(pokemon => <PokemonView key={pokemon.name} id={pokemon.name} />)
                    :
                        <p>Loading...</p>
                }
            </div>
        )
    }
}