import * as ExpoScreenCaptureIos from '@threls/expo-screen-capture-ios';
import React, { useState } from 'react';
import {
  ScrollView,
  TextInput,
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ExpoScreenCaptureIos.ExpoScreenCaptureIosView
      style={{
        display: 'flex',
        flex: 1,
        padding: 20,
      }}
    >
      <ScrollView
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          backgroundColor: 'orange',
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: 12,
        }}
        horizontal
        alwaysBounceVertical
      >
        <View style={{ marginBottom: 20, width: '100%' }}>
          <Text>Try and input some text below</Text>
          <TextInput placeholder='TEXT' style={styles.textInput} />
        </View>
        <View>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ExpoScreenCaptureIos.ExpoScreenCaptureIosView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
    width: '100%',
  },
});
