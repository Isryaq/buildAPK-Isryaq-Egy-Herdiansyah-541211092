import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Button ({title, onPress}) {
  return (
    <View>
      <TouchableOpacity style={[styles.loginButton, { marginTop: 20 }]} onPress={onPress}>
      <Text style={styles.loginButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export {Button};

const styles = StyleSheet.create({
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#427D9D',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});