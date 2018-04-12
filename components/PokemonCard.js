import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';

import sprites from '../data/sprites';
import colors from '../data/colors';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 2,
  },
  image: {
    margin: 16,
    width: 72,
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

class PokemonCard extends Component {
  state = {
    image: null,
  };

  _pickImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }
   
  render() {
    const sprite = this.state.image ? { uri: this.state.image } : sprites[this.props.pokemon.id - 1];

    return (<TouchableOpacity
      activeOpacity={0.7}
      onPress={this._pickImage}
      style={[styles.block, { backgroundColor: colors[this.props.pokemon.types[0].toLowerCase()] }]}
    >
      <Text style={[styles.index, styles.subtitle]}>#{this.props.pokemon.id}</Text>
      <Image source={sprite} style={styles.image} />
      <Text style={styles.title}>{this.props.pokemon.name}</Text>
    </TouchableOpacity>)
  }
}


PokemonCard.propTypes = {
  pokemon: PropTypes.object,
}

export default PokemonCard;