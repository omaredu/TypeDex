import React, { Component } from 'react'
import PokemonView from './PokemonView'

import { Pokemon } from '../classes'
import './stylesheets/css/main.css'

type GridStates = {
    list: Array<Object>,
    loading: boolean,
    pokedex: number[]
}

type GridProps = {
    pokedex: number[]
}

export default class PokemonGrid extends Component<GridProps, GridStates> {

    state = {
        list: [],
        loading: true,
        pokedex: []
    }

    async componentDidUpdate() {
        let { pokedex } = this.props
        let pokemonList = await Pokemon.getList(pokedex[0], pokedex[1])
        
        this.setState({list: pokemonList, loading: false})
    }
    
    render() {
        return(
            <div className="grid-container">
                <div className="pokemon-grid">
                    {
                        !this.state.loading ?
                            //@ts-ignore
                            this.state.list.map(pokemon => <PokemonView key={pokemon.name} id={pokemon.name} />)
                        :
                            <p className="grid-loading">Loading...</p>
                    }
                </div>
            </div>
        )
    }
}