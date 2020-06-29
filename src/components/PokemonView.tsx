import React, { Component, Fragment } from 'react'
import { createPopper } from '@popperjs/core'

import { Pokemon } from '../classes'

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
        // @ts-ignore
        await this.setState({name: view.info.name, sprite: Pokemon.getSprite(view.id), loading: false})
    }

    render() {
        return(
            <div>
                {
                    !this.state.loading ?
                        <Fragment>
                            <h1>{this.state.name}</h1>
                            <img src={this.state.sprite} />
                        </Fragment>
                    :
                        <p>Loading...</p>
                }
            </div>
        )
    }
}