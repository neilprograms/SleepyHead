//React and UI Kitten Imports
import React, {useState} from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import { Layout, Text, Radio, RadioGroup } from '@ui-kitten/components';

//Components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function SettingsMain() {
  return (
      <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="SoundSelection" component={SoundSelection} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const Settings = ({navigation}) => {
  return (
    <View style={styles.settingsContainer}>
      <Layout style={styles.layoutCont}>
        <Layout style={styles.layoutComp} level='4' onTouchEnd={() => navigation.navigate("SoundSelection")} >
          <Text>Sounds</Text>
        </Layout>
        <Layout style={styles.layoutComp} level='1' >
          <Text>Eye Size Set Up</Text>
        </Layout>
        <Layout style={styles.layoutComp} level='4'>
          <Text>About</Text>
        </Layout>
      </Layout>
    </View>
  );
}

const SoundSelection = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.ssPage}>
      <RadioGroup
        selectedIndex={selectedIndex}
        onChange={index => setSelectedIndex(index)}>
        <Radio style={styles.radioSelection}>Option 1</Radio>
        <Radio style={styles.radioSelection}>Option 2</Radio>
        <Radio style={styles.radioSelection}>Option 3</Radio>
      </RadioGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layoutCont: {
    flex: 1,
    flexDirection: 'column',
    width: "100%",
  },
  layoutComp: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ssPage:{
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: 'flex-start',
  },
  radioSelection:{
    backgroundColor: "grey",
    width: "100%",
    padding: 20,
    borderWidth: 2,
    borderRadius: 20,
  },
});


