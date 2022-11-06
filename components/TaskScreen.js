import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';


const TaskScreen = () => {
  const route = useRoute();
  const { index, task } = route.params;
  const [isEnabled, setIsEnabled] = useState(false);
  const [isImportant, setIsImportant] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleImportantSwitch = () => setIsImportant(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.detail}>Index: {index}</Text>
      <Text style={styles.detail}>Task: {task}</Text>
      <Text style={styles.detail}>Important</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isImportant ? "cyan" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleImportantSwitch}
        value={isImportant}
      />
      <Text style={styles.detail}>Urgent</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "cyan" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E3364',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detail: {
    fontSize: 18,
    color: 'white',
    paddingBottom: 12
  }
});

export default TaskScreen;