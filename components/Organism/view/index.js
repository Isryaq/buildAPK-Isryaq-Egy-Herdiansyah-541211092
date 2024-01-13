import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, TextInput, View } from 'react-native';

const Viewdata = (props) => {
  return (
    <View style={styles.parent_view_data}>
      <Text style={styles.help_input}>{props.data}</Text>
      <View style={styles.parent}>
        <Text style={styles.data}>{props.place}</Text>
      </View>
    </View>
  )
}

export { Viewdata }

const styles = StyleSheet.create({
  parent: {
    paddingVertical:10,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#eeeeee"
  },
  // style: {vncn},
  parent_view_data: {
    gap: 8
  },
  help_input: {
    fontSize: 16
  },
  data: {
    fontSize: 16,
    color: "#000000"
  }
})