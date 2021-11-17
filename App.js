import {StatusBar} from 'expo-status-bar';
import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Video} from 'expo-av';
//import mVideo from "./assets/sample.mp4"

export default function App() {

  const [ctext, setCText] = useState('sound off');
  const [soundOn, setSoundOn] = useState(false);
  const [toggleSound, setToggleSound] = useState(true);


  const toggleSoundOnOf = (e) => {
    
    setToggleSound(!toggleSound);

    //toggleSound ? setSoundOn(true) : setSoundOn(false);

    if (toggleSound) {
      setCText("sound on");
      setSoundOn(true)

    }else{
      setCText("sound off");
      setSoundOn(false)  
    }

  };

 
  const startSound = () => {
    setSoundOn(false);
  };

  //https://docs.expo.io/versions/latest/sdk/video/
  //source={require('./assets/sample.mp4') }
  //useNativeControls

  return (
    <>
      <View style={styles.container}>
        <Video
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1}
          isMuted={soundOn}
          resizeMode="contain"
          shouldPlay
          isLooping
          style={{width: '100%', height: '100%'}}
        />
      </View>

      <View style={styles.buttonCon}>
        <TouchableOpacity
        style={styles.mBut}
        onPress={() => toggleSoundOnOf()}
        >
          <Text style={styles.mText}>{ctext}</Text>
        </TouchableOpacity>

      </View>


      <View>
        <Image source={require('./assets/ninja.png')} />
      </View>
    </>
  ); //END return
} // END Component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  mBut:{
    top: -100,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#426A8C',
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
  },
  buttonCon:{
    alignItems: 'center'
  },
  mText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
