import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, ThemeConsumer } from 'react-native-elements';

import db from './localdb';
import db1 from './db_1.json';
import PhonicSoundButton from './components/phonicSoundButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: []
    };
  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header backgroundColor={'#9c8210'} centerComponent={{ text: 'Cute Little Monkey', style: { color: '#ffffff', fontSize: 20 } }} />
          <Image source={{ uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png' }} style={styles.imageIcon} />
          <TextInput
            onChangeText={text => { this.setState({ text: text }) }}
            value={this.state.text}
            style={styles.inputBox}
          />
          <TouchableOpacity style={styles.goButton} 
          onPress={() => { 
            this.setState({ chunks: db1[this.state.text].chunks }) 
            this.setState({phonicSounds: db1[this.state.text].phones})
            }}>

            <Text style={styles.buttonText}>GO</Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map((item, index) => {
              return (
                <PhonicSoundButton
                  wordChunk = {this.state.chunks[index]}
                  soundChunk = {this.state.phonicSounds[index]}
                />
              )
            })}
          </View>
        </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8'
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  chunkButton:{
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    margin: 5,
    borderRadius: 10,
    width: '60%',
    height: 50
  }
})