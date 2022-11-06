import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import { styled } from 'nativewind';

import { TaskInputField } from './components/TaskInputField.js';
import { TaskItem } from './components/TaskItem.js';

const StyledView = styled(View)
const StyledText = styled(Text)
export default function App() {
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
      <Text style={styles.heading}>eisendo</Text>
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
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 15,
  }
});
