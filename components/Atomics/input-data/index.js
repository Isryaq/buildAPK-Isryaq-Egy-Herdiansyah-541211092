import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Inputdata() {
  const [nip, onChangeNip] = React.useState('');
  const [name, onChangename] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
  const [gender, onChangeGender] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 15 }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNip}
          value={nip}
          placeholder="NIP"
        />
      </View>
      <View style={{ paddingBottom: 15 }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangename}
          value={name}
          placeholder="Full Name"
        />
      </View>
      <View style={{ paddingBottom: 15 }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="Age"
        />
      </View>
      <View style={{ paddingBottom: 15 }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          placeholder="Course"
        />
      </View>
      <View style={{ paddingBottom: 15 }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeGender}
          value={gender}
          placeholder="Gender"
        />
      </View>
    </View>
  );
}

export { Inputdata };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
    padding: 0,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 20,
    marginBottom: 10,
    color: 'grey',
  },
});
