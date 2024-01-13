import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Buttondelete, Inputedit, Button } from '../components/Atomics/index';
import { Viewdata } from '../components/Organism/index';

export default function detail({navigation}) {
  return (
    <ScrollView>
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../assets/Logo.png')} />
      <Text style={styles.paragraph}>Detail Data</Text>
      <Text style={styles.title}>Isryaq Egy H.</Text>

      <View style={styles.main_content}>
        <View style={styles.form}>
          <Viewdata data="NIP" place="239301831"/>
          <Viewdata data="Name" place="Isryaq Egy H."/>
          <Viewdata data="Age" place="17"/>
          <Viewdata data="Course" place="Matematika"/>
          <Viewdata data="Gender" place="Laki - Laki"/>
        </View>
        <View style={styles.button_pack}>
          <Button
            title="Edit"
            onPress={() => {
              navigation.navigate('Edit');
            }}
          />
          <Buttondelete
            title="Delete"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
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
  // MAIN CONTENT
  main_content: {
    paddingHorizontal: 16,
    gap: 28
  },
  form: {
    gap: 18
  },
  button_pack: {
    gap: 8
  }
});