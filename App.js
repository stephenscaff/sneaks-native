import React, { useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNav from './src/nav/AppNavigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const fetchFonts = () => {
  return Font.loadAsync({
    'graphik': require('./src/assets/fonts/Graphik.otf'),
    'graphik-med': require('./src/assets/fonts/GraphikMedium.otf'),
    'graphik-bold': require('./src/assets/fonts/GraphikBold.otf'),
    'knockout': require('./src/assets/fonts/KnockoutLight.otf'),
  });
}


export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={ fetchFonts }
        onFinish={ () => setDataLoaded(true) }
      />
    );
  }

  return (
    <NavigationContainer>
      <AppStackNav />
    </NavigationContainer>
  );
}
