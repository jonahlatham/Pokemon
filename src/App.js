import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import PokemonList from './Views/Pokemon_List/Pokemon_List'
import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchText:"",
      pokemon: [],
      filterPokemon: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    debugger
    const pokemonPromises = [];
    for(let i = 1; i <= 151; i++){
      pokemonPromises.push(axios.get(`${baseUrl}/${i}`))
    }
    Promise.all(pokemonPromises)
      .then((response) => {
        debugger
        this.setState({
          pokemon:response.map((e) => {
            return e.data
          }),
          filterPokemon:response.map((e) => {
            return e.data
          })
        })
      })
  }



handleChange(event){
  const stuff = this.state.pokemon.filter((e) => {
    return e.name.includes(event.target.value)
  })
  this.setState({
    [event.target.name]: event.target.value,
    filterPokemon:stuff
  }
  )
}

  render(){
    return (
      <div className="App">
    <Header />
    <div className="search-box-container">
      <input className="search-box" onChange={this.handleChange} placeholder="Filter Pokemon" type="text" value={this.state.searchText} name="searchText"/>
    </div>
    <div>
    </div>
    <PokemonList pokemon={this.state.filterPokemon}/>
    </div>
    );
  }
}
  

export default App;
