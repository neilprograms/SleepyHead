//React and UI Kitten Imports
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import { ApplicationProvider, Layout, Text, Button, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Navigator from './settingsStack'


//Components
import { Settings } from './components/settings';


export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      
      <Navigator />

    </ApplicationProvider>
  );
}


