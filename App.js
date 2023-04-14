import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() { 
  return (
    <View style={styles.container}>
      <Card style={styles.logo}>
        <AssetExample />
      </Card>
      <TextInput 
       style={[styles.input, styles.emailInput]}
       placeholder="Email"
       keyboardType="input1"/>
       <View style={styles.line}></View>
      <TextInput
        style={[styles.input, styles.passInput]}
        placeholder="Password"
        secureTextEntry={true}
        keyboardType="input2"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#B9090B',
    padding: 8,
    paddingHorizontal: 50,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 0,
    paddingHorizontal: 10,
    height: 50,
    color: '#9A9A9A',
    
 

  },
  button: {
    backgroundColor: '#B9090B',
    borderRadius: 5,
    paddingVertical: 16,
    marginVertical: 10,
    marginTop: 25,
    marginBottom: 20,
    borderColor: '#fff',
    borderWidth: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: -50,
    fontWeight: 'bold',
  },
  logo: {
    marginTop: -70,
    marginBottom: 70,
  },
  emailInput:{
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  passInput:{
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
    line: {
    
    height: 1,
    backgroundColor: '#cfcfcf',
    alignSelf: 'stretch',
  },

});
