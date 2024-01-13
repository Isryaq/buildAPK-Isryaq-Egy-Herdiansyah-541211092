import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { TextLink, Button, Inputregister } from '../components/Atomics/index';

export default function Register({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />
      <Text style={styles.paragraph}>Hello Teachers,</Text>
      <Text style={styles.title}>Don't forget register to continue</Text>
      <Inputregister />
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <TextLink
        title1="Already have an account?"
        title2="Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
    padding: 24,
  },
  paragraph: {
    marginTop: 17,
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    marginTop: 5,
    marginBottom: 40,
    color: 'grey',
    fontWeight: 'light',
    fontSize: 15,
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
