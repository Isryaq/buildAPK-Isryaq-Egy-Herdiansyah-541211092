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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackActions } from '@react-navigation/native';
import { Content } from '../components/Organism/index';

export default function Home({ navigation }) {
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
        <Text style={styles.paragraph}>Welcome back,</Text>
        <Text style={styles.title}>Hai, How Are You??</Text>
        <TouchableOpacity style={styles.addButton} title="Home" onPress={()=>{navigation.navigate('Insert')}}>
          <Icon name={'plus'} size={20} color="white" style={styles.icon} />
          <Text style={{ fontSize: 12, fontWeight: 700, color: 'white'}}>
            ADD
          </Text>
        </TouchableOpacity>
        <View style={styles.main_content}>
        <Content onPress={() => 
          navigation.navigate('Detail')} name="Isryaq Egy H." email="isryaq@gmail.com"
        />
        <Content onPress={() => 
          navigation.navigate('Detail')} name="Vinicius Junior" email="vini@gmail.com"
        />
        <Content onPress={() => 
          navigation.navigate('Detail')} name="Gibrani Lamala" email="gibran@gmail.com"
        />
        <Content onPress={() => 
          navigation.navigate('Detail')} name="Salih Wardoyo" email="salih@gmail.com"
        />
        <Content onPress={() => 
          navigation.navigate('Detail')} name="Ina Gunami" email="ina@gmail.com"
        />
      </View>
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
    main_content: {
    paddingHorizontal: 16,
    gap: 18
  },
  paragraph: {
    marginTop: 17,
    fontSize: 22,
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
    width: 70,
    height: 70,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  addButton: {
    width: '25%',
    height: 40,
    backgroundColor: '#427D9D',
    borderRadius: 10,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'flex-end',
    marginBottom: 20
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-left',
    paddingLeft: 15,
    paddingEnd: 15,
  },
});
