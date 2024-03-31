import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenue sur Notre App!</Text>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.logo}
        />
        <Text style={styles.subtitle}>
          Commencez votre aventure avec React Native.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default App;
