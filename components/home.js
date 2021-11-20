//React and UI Kitten Imports
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Layout, Button, ButtonGroup, Text, Icon } from '@ui-kitten/components';

import { Camera } from 'expo-camera';
import TopNavigationSimpleUsageShowcase from './topNav'

import { SafeAreaView } from 'react-native';


const CameraView = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Icon
              style={styles.icon}
              fill='#8F9BB3'
              name='flip-2-outline'
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

export const Home = () => {
  return (
    <Layout style={styles.layoutCont}>
      <Layout style={styles.layoutHeaderComp} >
        <SafeAreaView>
          <View style={styles.topTitle}>
            <Icon
              style={styles.icon}
              fill='#8F9BB3'
              name='car-outline'
            />
            <Text style={styles.title} category='h4'>Sleepy Heads</Text>
          </View>
        </SafeAreaView>
      </Layout>
      <Layout style={styles.layoutCameraComp} >
        <CameraView />
      </Layout>
    </Layout>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    flex: 1,
    margin: 15,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#EBEBEB",
    borderRadius: 100,
    padding: 6,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  layoutCont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    overflow: "visible",
  },
  layoutHeaderComp: {
    flex: 1,
  },
  layoutCameraComp: {
    flex: 9,
  },
  topTitle: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 5,
    alignItems: "flex-start",
    justifyContent: "space-between",
    overflow: "visible",
  },
  icon: {
    flex: 1,
    width: 30,
    height: 30,
  },
  title: {
    flex: 1,
    marginLeft: 6,
  }
});
