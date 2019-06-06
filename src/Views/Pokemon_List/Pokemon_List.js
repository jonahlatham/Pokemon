import React, { Component } from 'react'
import './Pokemon_List.css'
import PokemonCard from './Components/Pokemon/Pokemon'
import pokemonHelper from './pokemonHelper'

export default class PokemonList extends Component {
  render() {
    debugger
        const pokemonCards = this.props.pokemon.map((e, i, a) => {
          const id = pokemonHelper(e.id)
          const lastPokemon = id !== null ? a[id] : id
            return <PokemonCard key = {e.id} lastPokemon = {lastPokemon} pokemon = {e}/>
        })
    return (
      <div className="pokemon-list">
        {pokemonCards}
      </div>
    )
  }
}
