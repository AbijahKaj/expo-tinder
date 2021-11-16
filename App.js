import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold
} from '@expo-google-fonts/montserrat';
import AppLoading from "expo-app-loading";
import MainTabNavigator from "./navigation/MainTabNavigator";


const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold
  });
  if(!fontsLoaded) {
    return <AppLoading/>
  }
  return(
      <NavigationContainer>
        <MainTabNavigator/>
      </NavigationContainer>
  )
}
export default App;