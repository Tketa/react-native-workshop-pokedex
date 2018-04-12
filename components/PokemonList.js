import React from 'react';
import PropTypes from 'prop-types';
import { 
  FlatList,
  Text,  
  View,
} from 'react-native';


const PokemonList = ({ pokemons }) => (
  <View>
    <FlatList
      data={pokemons}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(item, index) => item.id.toString()}
    />
  </View>
)

PokemonList.propTypes = {
  pokemons: PropTypes.array
}

export default PokemonList;

