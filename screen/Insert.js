import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
  } from 'react-native';
  import { Buttondelete ,Inputdata, Button } from '../components/Atomics/index';
  
  export default function Insert({ navigation }) {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/Logo.png')} />
        <Text style={styles.paragraph}>Insert Your Data</Text>
          <Text style={styles.title}>Insert Your Data</Text>
  
        <Inputdata/>
        <Button
              title="Insert"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            <Buttondelete
              title="Cancel"
              onPress={() => {
                navigation.navigate('Home');
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
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    // TOP
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
  });
  