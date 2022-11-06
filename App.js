import React, { useState, useCallback } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { styled } from 'nativewind';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

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
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <Text style={styles.heading}>eisendo</Text> */}
      <Image source={require('./assets/icon.png')} style={styles.logo} />
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
      {/* <PrioritizeButton></PrioritizeButton> */}
      <TaskInputField addTask={addTask}/>
    </View>
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
