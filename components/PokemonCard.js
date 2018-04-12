import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';

import sprites from '../data/sprites';
import colors from '../data/colors';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 2,
  },
  image: {
    margin: 16,
    height: 72,
    resizeMode: 'contain',
  },
  index: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 8,
  },
  title: {
    color: '#000',
    fontSize: 13,
    textAlign: 'center',
    opacity: 0.7,
  },
  subtitle: {
    color: '#000',
    fontSize: 11,
    textAlign: 'center',
    opacity: 0.5,
  },
});

const PokemonCard = (props) => (
  <View
    activeOpacity={0.7}
    style={[styles.block, { backgroundColor: colors[props.pokemon.types[0].toLowerCase()] }]}
  >
    <Text style={[styles.index, styles.subtitle]}>#{props.pokemon.id}</Text>
    <Image source={sprites[props.pokemon.id - 1]} style={styles.image} />
    <Text style={styles.title}>{props.pokemon.name}</Text>
  </View>
)


PokemonCard.propTypes = {
  pokemon: PropTypes.object,
}

export default PokemonCard;