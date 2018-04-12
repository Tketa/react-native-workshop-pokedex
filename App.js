import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PokemonList from './components/PokemonList';

import pokemons from './data/pokemons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PokemonList
          pokemons={pokemons}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
