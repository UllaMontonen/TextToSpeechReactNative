import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import * as Speech from 'expo-speech';

// This is an app that utilize Text-to-speech functionality.
// User can write a word to the text input field and when
// pressing the button, app will read the input in the chosen language


export default function App() {

  // text input
  const [text, setText] = useState('');
  // picker language
  const [selectedLanguage, setSelectedLanguage] = useState('fi-FI');

  // speak function activated when pressing the button
  // spoken language has been chosen from the picker
  const speak = () => {
    Speech.speak(text, {
      language: selectedLanguage,
    });
  };


  // input: user can write down the text they want to hear
  // picker: user can choose the spoken language
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
        placeholder={'Write text here'}
      />
      <View style={{ weight: 50, width: 150, paddingTop: 10 }}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedLanguage(itemValue)
          }}>
          <Picker.Item label="Finnish" value="fi-FI" />
          <Picker.Item label="English" value="en-GB" />
          <Picker.Item label="Spanish" value="es-ES" />
          <Picker.Item label="French" value="fr-FR" />
          <Picker.Item label="German" value="de-DE" />
        </Picker>
      </View>
      <View style={styles.button}>
        <Button title="Press to hear text" onPress={speak} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
  },
  input: {
    marginBottom: 5,
    padding: 10,
    borderColor: "#AED6F1",
    borderWidth: 1,
    marginTop: 50,
    width: "60%",
  },
  // iPhone button does not have bacground color
  button: {
    backgroundColor: "#AED6F1",
    width: "60%",
    padding: 3,
  },
});
