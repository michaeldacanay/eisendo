import React, { useState } from 'react';
import { Alert, Button, Image, Keyboard, ScrollView, StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TaskInputField } from './TaskInputField.js';
import { TaskItem } from './TaskItem.js';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index !== deleteIndex))
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.logo} />
      <ScrollView style={styles.scrollView}>
        {
          tasks.map((task, index) => {
            return (
              <Pressable key={index}
                onPress={() =>
                  navigation.navigate('Task', {
                    index: index,
                    task: task,
                  })
                }
              >
                <View style={styles.taskContainer}>
                  <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
                </View>
              </Pressable>
            );
          })
        }
      </ScrollView>
      {/* <Button
        title="DO"
        onPress={() => Alert.alert('Simple Button pressed')}
        style={styles.button}
      /> */}
      <Pressable style={styles.button} onPress={() => Alert.alert('You can do it!')}>
        <Text style={styles.text}>DO</Text>
      </Pressable>
      <TaskInputField addTask={addTask}/>
    </View>
  );
  
};

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
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'teal',
    marginBottom: 100,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default HomeScreen;