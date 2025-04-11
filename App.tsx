/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  NativeModules,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapView from './MapView.js';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
    return (
      <View style={{flex: 1}}>
          <View style={{height: 100, backgroundColor:"blue"}}/>
          <MapView language={"en"} getRouteTo={"store_id"} showOnMap={"store_id"} style={{ flex: 1}}/>
          <View style={{height: 100, backgroundColor:"blue"}}>
          <Button
            title="Show pin on map"
            onPress={() => {
              NativeModules.PoilabsNavigationBridge.showPointOnMap("store_id");
            }
            }
          />
            <Button
            title="Get route"
            onPress={() => {
              NativeModules.PoilabsNavigationBridge.getRouteTo("store_id");
            }
            }
          />
           <Button
            title="Restart map"
            onPress={() => {
              NativeModules.PoilabsNavigationBridge.reInitMap();
            }
            }
          />
          </View>
      </View>
    );

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
