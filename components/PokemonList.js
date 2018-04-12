import React from 'react';
import PropTypes from 'prop-types';
import { 
  FlatList,
  Text,  
  View,
} from 'react-native';

import PokemonCard from './PokemonCard';


const PokemonList = ({ pokemons }) => (
  <View>
    <FlatList
      data={pokemons}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      keyExtractor={(item, index) => item.id.toString()}
    />
  </View>
)

PokemonList.propTypes = {
  pokemons: PropTypes.array
}

export default PokemonList;

