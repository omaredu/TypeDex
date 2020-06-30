import React, { Component } from 'react'

import { Types } from '../classes'

interface TypeProps {
    type: string
}

interface TypeStates {
    name: string,
    color: string,
    contrast: string
}

export default class PokemonType extends Component<TypeProps, TypeStates> {

    state = { 
        name: "normal",
        color: "#ececec",
        contrast: "#212121"
    }

    componentDidMount() {
        let type = this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)
        //@ts-ignore
        let typeInfo = Types[type]

        this.setState({
            name: typeInfo.name,
            color: typeInfo.color,
            contrast: typeInfo.contrast
        })
    }

    render() {
        return (
            <div 
                style={{ color: this.state.contrast, backgroundColor: this.state.color }} 
                className="pokemon-type"
            >
                {this.state.name}
            </div>
        )
    }
}