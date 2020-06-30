import React, { Component } from 'react';
import { PokemonGrid, Header } from './components'

type AppStates = {
  pokedex: number[]
}

export default class App extends Component<{}, AppStates> {
  state = {
    pokedex: [151, 0]
  }
  
  setPokedex = (region: number[]) => {
    this.setState({ pokedex: region })
  }

  render() {
    return (
      <div className="App">
        <Header setPokedex={this.setPokedex} />
        <div style={{ height: "8em" }} />
        <PokemonGrid pokedex={this.state.pokedex} />
      </div>
    )
  }
}