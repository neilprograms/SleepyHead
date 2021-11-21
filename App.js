//React and UI Kitten Imports
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';

import { ApplicationProvider, Layout, Text, Button, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

//Import Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//Components
import SettingsMain from './components/settings';
import { Home } from './components/home';
import fullLogo from './assets/img/fullLogo.png'

const LetsGoPage = () => {
  const [letsGo, setLetsGo] = useState(false);

  const chooseLayout = () => {
    if(letsGo) {
        return <Page />
    }
    else {
      return(
        <View style={lgStyle.view}>
          <SafeAreaView>
            <Text style={lgStyle.title, {margin: 20, textAlign:'center'}} category='h4'>Sleepy Heads</Text>
          </SafeAreaView>
          <Image style={lgStyle.image} source={fullLogo}/>
          <Text style={lgStyle.title, {margin: 20, textAlign:'center'}} category='h2'>The app perfect for roadtrips and long drives!</Text>
          <Text style={lgStyle.title, {marginBottom: 20}} category='p1'>Driving safely made easy</Text>
          <Button style={{width: "75%"}} onPress={()=>{setLetsGo(true)}}>Let's Start</Button>
        </View>
      )
    }
  }

  return chooseLayout()

}

const lgStyle = StyleSheet.create({
  title: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
  }
})

const Page = () => {

  const [buttonSelected, setButtonSelected] = useState(0);

  const chooseLayout = () => {
    if(buttonSelected == 0) {
        return <Home />
    }
    else {
        return <SettingsMain />
    }
  }

  return (
    <View style={styles.navContainer} >
      <Layout style={styles.layoutCont}>
        <Layout style={styles.layoutCompPage} level='4'>
            {
              chooseLayout()
            }
        </Layout>
        <Layout style={styles.layoutCompBottomNav} level='2'>
          <BottomNav buttonSelected={buttonSelected} setButtonSelected={setButtonSelected} />
        </Layout>
      </Layout>      
      
    </View>
  );
} 

//-------------- Bottom Nav ----------------
const BottomNav = ( {buttonSelected, setButtonSelected} ) => {
  const [cameraButtonState, setCameraButtonState] = useState("filled");
  const [settingsButtonState, setSettingsButtonState] = useState("ghost");

  const onBottomNavClickCamera = () => {
      if (cameraButtonState != "filled") {
          setCameraButtonState("filled")
          setSettingsButtonState("ghost")
          setButtonSelected(0)
        }
      }
      const onBottomNavClickSettings = () => {
        if (settingsButtonState != "filled") {
          setCameraButtonState("ghost")
          setSettingsButtonState("filled")
          setButtonSelected(1)
        }
  }

  return (
      <View style={styles.buttonContainerBN}>
          <Button appearance={cameraButtonState} size="giant" onPress={() => { onBottomNavClickCamera() }}>Camera</Button>
          <Button appearance={settingsButtonState} size="giant" onPress={() => { onBottomNavClickSettings() }}>Settings</Button>
      </View>
  );
}

//--------------- App -------------
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <LetsGoPage />
    </ApplicationProvider>
  );
}


const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#F7F9FC",
  },
  pageContainer: {
    flex: 8,
  },
  bottomNavContainer: {
    flex: 2,
    backgroundColor: "grey",
  },
  layoutCont: {
    flex: 1,
    flexDirection: 'column',
    width: "100%",
  },
  layoutCompPage: {
    flex: 6,
    justifyContent: 'center',
  },
  layoutCompBottomNav: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainerBN: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F7F9FC",
},
});

