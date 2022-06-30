import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component{
    playSound= async (soundChunk)=>{
        var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3'
        await Audio.Sound.createAsync(
            {uri: soundLink},
            {shouldPlay: true}
        )
    }
    render(){
        return(
            <TouchableOpacity style={styles.chunkButton} onPress={()=>{this.playSound(this.props.soundChunk)}}>
                <Text style={styles.displayText}>{this.props.wordChunk}</Text>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    displayText: {
        textAlign: 'center',
        fontSize: 30,
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
});
