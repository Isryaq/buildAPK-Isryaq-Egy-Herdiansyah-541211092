import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Inputlogin() {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 15 }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Username"
        />
      </View>
      <View>
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
    </View>
  );
}

export { Inputlogin };

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
