import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, TextInput, View } from 'react-native';

const Inputedit = (props) => {
  const [ textInputStyle, setTextInputStyle] = useState(styles.defaultInput);
  const onFocus = () => {
    setTextInputStyle(styles.focusInput);
  };
  return (
    <View style={styles.input_field}>
      <Text style={styles.help_input}>{props.title_input}</Text>
      <TextInput style={textInputStyle} onFocus={onFocus}
      placeholder={props.place}/>
    </View>
  )
}

export {Inputedit}

const styles = StyleSheet.create({
  defaultInput: {
    paddingVertical:10,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    fontSize: 16,
  },
  input_field: {
    gap: 8
  },
  help_input: {
    fontSize: 16
  },
  focusInput: {
    paddingVertical:10,
    paddingHorizontal: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#428DFD",
    fontSize: 16,
  },
})