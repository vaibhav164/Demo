import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const HomeScreen = () => {
  return (
   <View style={styles.container}>
    <Text style={styles.heading}>Welcome To Home</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
    fontSize:20,
    fontWeight:'600'
  }
});

