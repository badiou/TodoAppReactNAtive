import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,View,Text,TextInput,Button} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { styles: s, constants: c } = bootstrapStyleSheet;



const AddTask=({addTask})=>{
    //task est en quelque sorte ce qui est saisit dans le champ de texte
    const [task,setTask] =useState('')

    const changeHandler = (val)=>{
        setTask(val)

    }
    return(
        <View>
            <View  style={[s.formGroup]}>
                <TextInput 
                style={[s.formControl,s.borderSuccess,styles.textBordure]}
                    placeholder="Saisir les tâches à faire"
                    onChangeText={changeHandler}
                />
            </View>
            <Button title="Add task"
                color="blue"
                onPress={()=> addTask(task)} 
            />
        </View>
    )

}
const styles = StyleSheet.create({
    buttonStyle: {
     marginTop :80
    },
    textBordure:{
        borderBottomWidth:2
    }
  });

export default AddTask