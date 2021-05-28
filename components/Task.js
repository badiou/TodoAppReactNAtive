import React from 'react';
import {StyleSheet, Text,TouchableOpacity,Alert} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import { Entypo } from '@expo/vector-icons'; 
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;

//ici item passé en parametre est un objet. c'est pourquoi on met les {} dans les parametres de la fonction
const Task = ({item,deleteTask})=>{
    return(
        <TouchableOpacity 
            style={[s.text,s.listGroupItem,
            s.h4,s.textDanger,
            s.listGroupFlush,
            s.listGroupItemPrimary,
            s.borderDanger,
            s.rounded,styles.itemStyle]
            } >      
            <Text>
              {item.task}
            </Text>
            <Entypo name="trash" 
            size={24} 
            color="blue"
            onPress={()=>deleteTask(item.id)}
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    itemStyle:{
      flexDirection:"row",
      justifyContent:"space-between"
    }
  });
export default Task
