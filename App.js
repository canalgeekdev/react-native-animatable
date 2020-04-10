import React, { Component } from 'react';
import * as Animatable from "react-native-animatable";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

export default function App() {

  return (

    <KeyboardAvoidingView style={styles.bgColorPanel}>

      <View>

        <Animatable.Image
          iterationCount={5}
          direction="alternate"
          animation="bounceInDown"
          duration={1500}
            style={{
              width: 140,
              height: 140,
              borderRadius: 70,
              marginBottom: 10,
            }}
            source={require('./src/assets/logo.png')}
          />

      </View>

      <View
        style={
          styles.container}
        >

          <Animatable.View
            animation="bounceInRight"
            duration={1100}
          >
            <TextInput
              style={styles.textInput}
              keyboardType="email-address"
              placeholder="Digite seu email"
            />
          </Animatable.View>


          <Animatable.View
            animation="bounceInRight"
            duration={1200}
          >
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Digite sua senha"
            />
          </Animatable.View>

          <Animatable.View
            animation="bounceInRight"
            duration={1400}
          >
            <TouchableOpacity style={styles.botaoLogin}>
              <Text style={styles.botaoLoginText}>Efetuar Login</Text>
            </TouchableOpacity>
          </Animatable.View>


        </View>

    </KeyboardAvoidingView>
    
  );

}

const styles = StyleSheet.create({
  bgColorPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34495e'
  },
  container: {
    backgroundColor: '#34495e'
  },
  logo: {
    marginBottom: 70,
    width: 140,
    height: 140,
    borderRadius: 70
  },
  textInput: {
    marginTop: 10,
    borderRadius: 7,
    padding: 10,
    width: 250,
    height: 40,
    color: '#34495e',
    backgroundColor: '#FFF',
    fontSize: 15
  },
  botaoLogin: {
    width: 250,
    borderRadius: 7,
    height: 50,
    marginTop: 10,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoLoginText: {
    color: '#FFF',
    fontWeight: 'bold'
  }

});