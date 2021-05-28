//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,FlatList,SafeAreaView, Alert,ScrollView,
TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './components/Hearder';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import Task from './components/Task';
import AddTask from './components/AddTask';
import { v4 as uuidv4 } from 'uuid';


const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;

export default function App() {

const [tasks, setTasks] = useState([
    {"task":"HTML I","done":true,"id":"1"},
    {"task":"CSS","done":true,"id":"2"},
    {"task":"Responsive design","done":true,"id":"3"},
    {"task":"Git","done":true,"id":"4"},
    {"task":"JavaScript I","done":true,"id":"5"},
    {"task":"JavaScript II","done":false,"id":"6"}
  ])

  //Methode ppur ajouter une nouvelle tâche
  const addTask=(text)=>{
    if (!text){
      Alert.alert("Le champ est vide. Vous devez saisir la tâche à faire !!")
    }
    else
    {
      setTasks(prevTasks=>{
        return[{task:text,id:uuidv4()},
        ...prevTasks]
      })

    }
    
  }
  //Methode pour supprimer une tâche
  const deleteTask=(id)=>{
    setTasks(prevTasks=>{
      return prevTasks.filter((task)=>task.id !==id)
    })
  }
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>

        <AddTask addTask={addTask}/>
        
        <View style={styles.list}>
        <ScrollView>
          <FlatList style={[s.listGroup,styles.list]}
          data={tasks}
          renderItem={({item})=>
            (
            <Task item={item}
            deleteTask={deleteTask}/>
            )}/>
        </ScrollView>        
        </View>
       
        
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  content:{
    padding:30,
    backgroundColor:'white',
    flex:1
  },
  list:{
    marginTop:30,
    backgroundColor:'white'
  },
});
