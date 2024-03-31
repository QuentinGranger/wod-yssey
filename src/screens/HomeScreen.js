import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue sur L'a
      </Text>
      <Button
        title="S'inscrire"
        onPress={() => navigation.navigate('SignUp')}
      />
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
    marginBottom: 20,
  },
});

export default HomeScreen;
