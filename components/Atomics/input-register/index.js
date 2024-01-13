import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Inputregister() {
  const [name, onChangename] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [ confirmPassword, setConfirmPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
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
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
      </View>
      <View style={{ paddingBottom: 15 }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={!showPassword ? true : false}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.icon}>
          <Icon
            name={showPassword ? 'eye' : 'eye-off'}
            size={24}
            color="#888"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
          secureTextEntry={!showPassword ? true : false}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.icon}>
          <Icon
            name={showPassword ? 'eye' : 'eye-off'}
            size={24}
            color="#888"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export { Inputregister };

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
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingTop: 10,
    paddingEnd: 15,
  },
});
