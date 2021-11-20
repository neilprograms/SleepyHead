//React and UI Kitten Imports
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Layout, Text, Radio, RadioGroup } from '@ui-kitten/components';


export const SoundSelection = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View style={styles.page}>
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
  page:{
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
