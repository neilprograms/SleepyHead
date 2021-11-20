import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button, IconRegistry } from '@ui-kitten/components';
import { TopNavigationSimpleUsageShowcase } from './TopNav';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <View style={styles.page}>
        
        <SafeAreaView style={styles.navBar}>
          <View>
            <TopNavigationSimpleUsageShowcase />
          </View>
        </SafeAreaView>

        <View style={styles.container}>
          <Layout style={styles.layoutCont}>
            <Layout style={styles.layoutComp} level='4'>
              <Text>Sounds</Text>
            </Layout>
            <Layout style={styles.layoutComp} level='1' onTouchEnd={() => alert("hi")}  >
              <Text>Eye Size Set Up</Text>
            </Layout>
            <Layout style={styles.layoutComp} level='4'>
              <Text>About</Text>
            </Layout>
            <Layout style={styles.layoutComp} level='1'>
              <Text>2</Text>
            </Layout>
            <Layout style={styles.layoutComp} level='4'>
              <Text>1</Text>
            </Layout>
          </Layout>
        </View>
      </View>


    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  page:{
    flex: 1,
    flexDirection: "column",
  },
  container: {
    flex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    flex: 1,
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
});
