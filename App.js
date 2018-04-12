import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';

import allPokemons from './data/pokemons';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredPokemons: allPokemons,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar 
          onChangeText={(text) => {
            this.setState({
              filteredPokemons: allPokemons.filter(p => p.name.indexOf(text) > -1)
            });
          }}
        />
        <PokemonList
          pokemons={this.state.filteredPokemons}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
