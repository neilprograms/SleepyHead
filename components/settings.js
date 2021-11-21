//React and UI Kitten Imports
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Layout, Text, Radio, RadioGroup, Icon } from '@ui-kitten/components';


//Components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Sound
// import { Audio } from 'expo-av';
// import sound1 from '../assets/mp3s/sound1.wav'





export default function SettingsMain() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SoundSelection" component={SoundSelection} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const Settings = ({ navigation }) => {
  return (
    <View style={styles.settingsContainer}>
      <Layout style={styles.layoutCont}>
        <Layout style={styles.layoutComp} onTouchEnd={() => navigation.navigate("SoundSelection")} >
          <Icon
            style={styles.icon}
            fill='#E4E6E8'
            name='volume-up-outline'
          />
          <Text style={styles.text} category="label">Sounds</Text>
        </Layout>
        <Layout style={styles.layoutComp} onTouchEnd={() => navigation.navigate("About")} >
          <Icon
            style={styles.icon}
            fill='#E4E6E8'
            name='info-outline'
          />
          <Text style={styles.text} category="label">About</Text>
        </Layout>
      </Layout>
    </View>
  );
}

const SoundSelection = () => {
  // const [selectedIndex, setSelectedIndex] = useState(0);

  // const [sound1, setSound1] = React.useState();
  // async function playSound1() {
  //   console.log('Loading Sound');
  //   const { sound1 } = await Audio.Sound.createAsync(
  //     require('../assets/mp3s/sound1.wav')
  //   );
  //   setSound1(sound1);
  //   console.log('Playing Sound');
  //   await sound1.playAsync();
  // }
  // React.useEffect(() => {
  //   return sound1
  //     ? () => {
  //       console.log('Unloading Sound');
  //       sound1.unloadAsync();
  //     }
  //     : undefined;
  // }, [sound1]);


  return (
    <View style={styles.ssPage}>
      <RadioGroup
        selectedIndex={selectedIndex}
        onChange={index => setSelectedIndex(index)} style={styles.radioGroup}>
        <Radio style={styles.radioSelection}>Sound 1</Radio>
        <Radio style={styles.radioSelection}>Sound 2</Radio>
        <Radio style={styles.radioSelection}>Sound 3</Radio>
      </RadioGroup>
    </View>
  );
}

const About = () => {
  return (
    <View style={styles.about}>
      <Text style={styles.aboutTextHeader} category='s1'>Impact</Text>
      <Text style={styles.aboutTextP} category='p1'>Drowsy driving results in over 100,000 deaths and even more injuries every year. To combat this, we at Sleepyheads have created an app built to help drivers combat the effects of drowsy driving when driving long distances. With the usage of autonomous technology, this app is able to track the user's eyes and sounds an alarm when they have had them closed for too long.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  about: {
    flex: 1,
    borderRadius: 20,
    margin: 15,
    padding: 20,
    backgroundColor: '#1C49A7',
    justifyContent: 'center',
  },
  text: {
    color: "#E4E6E8",
    fontSize: 20,
    fontFamily: "Helvetica",
  },
  aboutTextHeader: {
    fontFamily: "Helvetica",
    textAlign: 'center',
    color: "#E4E6E8",
    fontSize: 20,
    margin: 5,
  },
  aboutTextP: {
    fontFamily: "Helvetica",
    textAlign: 'center',
    color: "#E4E6E8",
    fontSize: 18,
    margin: 5,
  },
  settingsContainer: {
    flex: 1,
    // backgroundColor: '#F6F2E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layoutCont: {
    flex: 1,
    flexDirection: 'column',
    width: "100%",
  },
  layoutComp: {
    flex: 1,
    height: 80,
    padding: 20,
    margin: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1C49A7",
  },
  ssPage: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: 'flex-start',
  },
  radioSelection: {
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#1C49A7'
  },
  icon: {
    height: 60,
    width: 60,
  },
  radioGroup: {
    flex: 1,
  }

});




