import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Home from './src/screens/containers/home';
import CoordinatesList from './src/coordinates/containers/coordinates-list'
import API from './utils/api';


const App: () => React$Node = () => {
  const [coordinatesList, setCoordinatesList] = useState([]);

  useEffect(() => {
    (async function getCoordinates() {
      try {
        let response = await API.getCoordinates();
        //console.log(response.routes[0].geometry.coordinates);
        setCoordinatesList(response.routes[0].geometry.coordinates);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Home>
              <Text style={styles.title}>Bienvenido a las coordenadas </Text>
              <CoordinatesList
                  list={coordinatesList}
              />
            </Home>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    color: '#4c4c4c',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});

export default App;
