import React, { useState, useCallback } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { styled } from 'nativewind';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

import { TaskInputField } from './components/TaskInputField.js';
import { TaskItem } from './components/TaskItem.js';
import TaskItemScreen from './components/TaskItemScreen.js';

export default function App() {
  const [tasks, setTasks] = useState([])
  const [ fontsLoaded ] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black-900.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index !== deleteIndex))
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <Image source={require('./assets/icon.png')} style={styles.logo} />
          
          <Stack.Screen>
            <ScrollView style={styles.scrollView}>
              {
                tasks.map((task, index) => {
                  return (
                    <View key={index} style={styles.taskContainer}>
                      <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
                    </View>
                  );
                })
              }
            </ScrollView>
          </Stack.Screen>
          

          {/* <PrioritizeButton></PrioritizeButton> */}
          <TaskInputField addTask={addTask}/>
        </View>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    resizeMode: 'contain'
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 20,
    fontFamily: 'Inter-Black',
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 15,
  }
});
