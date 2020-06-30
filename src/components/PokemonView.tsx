import React, { Component, Fragment } from 'react'

import { Pokemon } from '../classes'
import PokemonType from './PokemonType'

type PokemonProps = {
    id: number | string
}

type PokemonStates = {
    name: string,
    sprite: string,
    loading: boolean,
    info: Object
}

export default class PokemonView extends Component<PokemonProps, PokemonStates> {
    state = {
        name: "",
        sprite: "",
        loading: true,
        info: {}
    }

    async componentDidMount() {
        let view: Pokemon = new Pokemon(this.props.id)
        await view.fetchInfo()
        await this.setState({
            // @ts-ignore
            name: view.info.name, info: view.info,
            sprite: Pokemon.getSprite(view.id), 
            loading: false
        })
    }

    render() {
        return(
            <div className="pokemon-view">
                {
                    !this.state.loading ?
                        <Fragment>
                            {
                                // @ts-ignore
                                <p className="pokemon-id">#{this.state.info.id}</p>
                            }
                            <img className="pokemon-img" src={this.state.sprite} />
                            <ul className="type-list">
                                {
                                    //@ts-ignore
                                    this.state.info.types.map(type => (
                                        <li>
                                            <PokemonType key={this.state.name + "-" + type.type.name} type={type.type.name} />
                                        </li>
                                    ))
                                }
                            </ul>

                            <p className="pokemon-name">{this.state.name}</p>
                        </Fragment>
                    :
                        <p className="pokemon-loading">Loading...</p>
                }
            </div>
        )
    }
}