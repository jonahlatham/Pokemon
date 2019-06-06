import React, { Component } from 'react'
import './Pokemon.css'

export default class Pokemon extends Component {
  render() {
    console.log(this.props.pokemon)
                    // const looperMove = (arr) => {
                    //   arr.reduce((r,e,i,a) => {
                    //     r.push(this.props.lastPokemon.moves.move.name)
                    //     return r
                    //   },[])
                    // }
                    debugger
    const inside = this.props.lastPokemon ? <div className='inside'>
    <img className='floater' src={this.props.lastPokemon.sprites.front_default} alt="pokemon"/>
  </div> : ''
    let ability = this.props.pokemon.abilities.length > 0 ? this.props.pokemon.abilities[0].ability.name : 'None'
    return (
      <div className="pokemon-card">{this.props.pokemon.id}
        <h1>{this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}</h1>
        <h3>{ability}</h3>
        <div className='pokemon-sprite'>
          <div className="main-image" style={{ backgroundImage: `url(${this.props.pokemon.sprites.front_default})` }}>
            {inside}
          </div>

        </div>
        <h6>{this.props.pokemon.moves[0].move.name}</h6>

      </div>
    )
  }
}
