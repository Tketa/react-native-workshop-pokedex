import React from 'react';
import PropTypes from 'prop-types';
import { 
  FlatList,
  Text,  
  View,
} from 'react-native';

import PokemonCard from './PokemonCard';


const PokemonList = ({ pokemons }) => (
  <View style={{ flexDirection: 'row' }}>
    <FlatList
      data={pokemons}
      numColumns={2}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      keyExtractor={(item, index) => item.id.toString()}
    />
  </View>
)

PokemonList.propTypes = {
  pokemons: PropTypes.array
}

export default PokemonList;

