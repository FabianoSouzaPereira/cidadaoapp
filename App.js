import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import store from './src/store';
import Login from './src/pages/login';

export default function App() {
  const [emailValue, onChangeText] = React.useState('');
  const [passwordValue, passwordChange] = React.useState('');

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Login />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  buttom:{
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  buttomText:{
    color: '#FFF',
    fontWeight: 'bold'
  }
});
