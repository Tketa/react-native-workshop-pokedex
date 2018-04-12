import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    fontSize: 13,
    color: '#000',
    margin: 0,
    paddingVertical: 8,
    paddingRight: 20,
    paddingLeft: 28,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    margin: 8,
    paddingLeft: 48,
    height: 48,
  },
})

const SearchBar = (props) => (
    <TextInput
        placeholder="Find Pokémon by name"
        style={styles.input}
        placeholderTextColor="rgba(0, 0, 0, .32)"
        selectionColor="rgba(0, 0, 0, .32)"
        underlineColorAndroid="transparent"
        onChangeText={props.onChangeText}
        returnKeyType="done"
      />
)

SearchBar.propTypes = {
  onChangeText: PropTypes.func,
}

export default SearchBar;