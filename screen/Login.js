import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import { TextLink, Button, Inputlogin } from '../components/Atomics/index';

export default function Login({ navigation }) {

  const handleLogin = () => {
    if (username === '' && password === '') {
      Alert.alert('Login Success', 'Welcome!');
      navigation.dispatch(StackActions.replace('Home'));
    } else {
      Alert.alert('Login Failed');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/Logo.png')} />
        <Text style={styles.paragraph}>Hello Teachers,</Text>
        <Text style={styles.title}>Don't forget login to continue</Text>
        <Inputlogin/>
        <Text style={styles.password}>Forget Password?</Text>
        <Button title="Login" onPress={()=>{navigation.navigate('Home')}}/>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center', color: 'grey' }}>
              Atau
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
        </View>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={{ fontSize: 16, fontWeight: 500, color: 'black' }}>
            Google
          </Text>
        </TouchableOpacity>
        <TextLink
          title1="Don't have an account?"
          title2="Register Now"
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
      </View>
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
  password: {
    marginTop: 10,
    marginBottom: 25,
    color: 'grey',
    fontWeight: 'light',
    fontSize: 13,
    textAlign: 'right',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  registerButton: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
