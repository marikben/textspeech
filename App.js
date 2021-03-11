import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View  } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = useState('');
  const speak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder='Type what you want to hear' style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}/> 
      <Button title="Press to hear text" onPress={speak} />
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
  input: {
    marginTop: 30, 
    marginBottom: 10,
    fontSize: 18,
    width: 200, 
    height: 45,
    borderColor: 'gray', 
    borderWidth: 1
  }
});
