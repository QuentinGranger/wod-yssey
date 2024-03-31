// /Users/user/Desktop/WODyssey/Mobile/src/screens/SignUpScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page d'inscription</Text>
      {/* Ici, vous pouvez ajouter des champs de formulaire, des boutons, etc. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});

export default SignUpScreen;
