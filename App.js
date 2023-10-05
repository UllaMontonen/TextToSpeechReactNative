import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
//import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import * as Speech from 'expo-speech';

// This is an app that utilize Text-to-speech functionality.
// User can write a word to the text input field and when
// pressing the button, app will read the input


export default function App() {

  const [text, setText] = useState('');


  const speak = () => {
    Speech.speak(text);
  };


  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
        placeholder={'Write text here'}
      />
      <Button title="Press to hear text" onPress={speak} />
      <StatusBar style="auto" />
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
    marginBottom: 5,
    padding: 10,
    borderColor: "#AED6F1",
    borderWidth: 1,
    marginTop: 50,
    width: "60%"
  },
  // iPhone button does not have bacground color
  button: {
    backgroundColor: "#AED6F1",
    width: "100%",
  },
});
