import React, { useState, useCallback } from 'react';
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { RootNavigator } from './navigation/index.tsx'

// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [ fontsLoaded ] = useFonts({
  //   'Inter-Black': require('./assets/fonts/Inter-Black-900.otf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <>
      <RootNavigator  />
      <StatusBar style="auto"  />
    </>
  );
}

