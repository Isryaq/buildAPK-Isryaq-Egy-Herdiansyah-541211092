import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Buttondelete ({title, onPress}) {
  return (
    <View>
      <TouchableOpacity style={[styles.loginButton, { marginTop: 20 }]} onPress={onPress}>
      <Text style={styles.loginButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export {Buttondelete};

const styles = StyleSheet.create({
  loginButtonText: {
    color: 'red',
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#F8F6F4',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});