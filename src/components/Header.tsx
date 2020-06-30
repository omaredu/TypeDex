import React, { Component } from 'react'

import logo from '../assets/logo.svg'

type HeaderProps = {
    setPokedex: Function
}

let regions = {
    kanto: [151, 0],
    johto: [100, 151],
    hoenn: [135, 251],
    sinnoh: [107,386]
}

export default class Header extends Component<HeaderProps, {}> {
    componentDidMount() {
        this.props.setPokedex(regions.kanto)
    }

    render() {
        return (
            <div className="header">
                <img className="logo" src={logo} alt="typedex icon" />
                <div className="region-selector-container">
                    <ul className="region-selector">
                        <li onClick={() => this.props.setPokedex(regions.kanto)} >Kanto</li>
                        <li onClick={() => this.props.setPokedex(regions.johto)} >Johto</li>
                        <li onClick={() => this.props.setPokedex(regions.hoenn)} >Hoenn</li>
                        <li onClick={() => this.props.setPokedex(regions.sinnoh)} >Sinnoh</li>
                    </ul>
                </div>
            </div>
        )
    }
}