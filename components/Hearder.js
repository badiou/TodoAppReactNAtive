import React, { useState } from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';

const Header=()=>{
    return(
    <View style={styles.header}>
        <Text style={styles.title}>228 Mobile Tasks</Text>

    </View>)
}
const styles = StyleSheet.create({
    header: {
      backgroundColor: 'blue',
      height:80,
    },
    title:{
      padding:30,
      textAlign:'center',
      color:'white',
      fontSize:20
    },
  });
  
export default Header