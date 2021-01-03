import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { connect } from 'react-redux';

const Login: React.FC = ( modules ) => {
  return(
    <View style={styles.container}>
      <Text>LoginView{ modules }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default connect( state => { state })(Login);