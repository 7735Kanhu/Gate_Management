import React from 'react';
import { View, Text, StyleSheet,TextInput, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function TabScreen1() {
  return (
    <View style={styles.container}>
      <View style={styles.middleContent}>
        <View style={styles.middleSearch}>

      <EvilIcons name="search" size={24} color="#808080" />
      <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#808080"
        />
        </View>
      <Ionicons name="options-outline" size={24} color="#808080" />
      </View>
      <View>

      <View style={styles.categoryhead}>
        <Text>Category</Text>
        <Text>View All</Text>
      </View>
      <View style={styles.cardContainer}>
        <View>
            <Image source={require('../../assets/icon.png')}/>
        </View>
        
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:15
  },
  middleContent:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#dcdcdc',
    padding:7,
    paddingHorizontal:15,
    marginVertical:2,
    borderRadius:5,
    justifyContent:'space-between'

  },
  middleSearch:{
    display:'flex',
    flexDirection:'row',
    gap:10
  },
  input:{

  },
  categoryhead:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    marginVertical:14,
    color:'#d2691e'
  },
  cardContainer:{
    display:'flex',
    flexDirection:'row'
  }
});
