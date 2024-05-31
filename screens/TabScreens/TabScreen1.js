import React from "react";
import { View, Text, StyleSheet, TextInput, Image, Button, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';

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
      <View style={styles.hero}>
        <View style={styles.heroTextContener}>
            <Text style={{backgroundColor:"#d3d3d3",color:'#fff',padding:10,borderTopRightRadius:20,borderBottomRightRadius:20}}>Special Promo</Text>
            <Text style={{marginLeft:15,color:"#fff"}}>All menswear</Text>
            <Text style={{marginLeft:15,color:"#fff",fontWeight:"bold"}}>50% Discount</Text>
            <TouchableOpacity style={{backgroundColor:"#a52a2a", borderRadius:10,paddingVertical:9,paddingHorizontal:10,marginLeft:15}}>
                <Text style={{marginLeft:15,color:"#fff",margin:"auto",fontSize:10}}>Buy Now</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Image source={require('../../assets/md1.jpg')} style={styles.heroImg}/>
        </View>
      </View>
      <View style={styles.categoryhead}>
        <Text>Category</Text>
        <Text>View All</Text>
      </View>
      <ScrollView
        horizontal
        style={styles.cardContainer}
        contentContainerStyle={{
          gap: 20,
          alignItems: "center",
          paddingVertical: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/i1.jpeg")}
          />
          <View style={styles.imgHover}>
            <FontAwesome6 name="shirt" size={20} color="#fff" />
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/i1.jpeg")}
          />
          <View style={styles.imgHover}>
            <FontAwesome6 name="hat-cowboy" size={20} color="#fff" />
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/i1.jpeg")}
          />
          <View style={styles.imgHover}>
            <MaterialCommunityIcons name="shoe-heel" size={24} color="#fff" />
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/i1.jpeg")}
          />
          <View style={styles.imgHover}>
            <MaterialIcons name="hourglass-full" size={24} color="#fff" />
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/i1.jpeg")}
          />
          <View style={styles.imgHover}>
            <MaterialCommunityIcons name="shopping" size={24} color="#fff" />
          </View>
        </View>
      </ScrollView>
      <View style={styles.popularHead}>
        <Text>Papular</Text>
        <Text>View All</Text>
      </View>
      <View style={styles.bottomCardContainer}>
        <View style={{width:"100%",flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.cardBody}>
            <Image source={require('../../assets/d1.png')} style={styles.image2}/>
            <View style={styles.textContainer}>
              <Text style={{color:"#808080"}}>Flower Dress</Text>
              <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text>$ 75</Text>
                <Fontisto name="heart-alt" size={10} color="red" />
              </View>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Image source={require('../../assets/d2.png')} style={styles.image2}/>
            <View style={styles.textContainer}>
              <Text style={{color:"#808080"}}>Mosiem Outfit</Text>
              <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text>$ 75</Text>
                <Fontisto name="heart-alt" size={10} color="red" />
              </View>
            </View>
          </View>
        </View>
        <View style={{width:"100%",flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.cardBody}>
            <Image source={require('../../assets/d3.png')} style={styles.image2}/>
            <View style={styles.textContainer}>
              <Text style={{color:"#808080"}}>Flower Dress</Text>
              <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text>$ 75</Text>
                <Fontisto name="heart-alt" size={10} color="red" />
              </View>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Image source={require('../../assets/d4.png')} style={styles.image2}/>
            <View style={styles.textContainer}>
              <Text style={{color:"#808080"}}>Flower Dress</Text>
              <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text>$ 75</Text>
                <Fontisto name="heart-alt" size={10} color="red" />
              </View>
            </View>
          </View>
        </View>
        <View style={{width:"100%",flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.cardBody}>
            <Image source={require('../../assets/d1.png')} style={styles.image2}/>
            <View style={styles.textContainer}>
              <Text style={{color:"#808080"}}>Flower Dress</Text>
              <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text>$ 75</Text>
                <Fontisto name="heart-alt" size={10} color="red" />
              </View>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Image source={require('../../assets/d1.png')} style={styles.image2}/>
            <View style={styles.textContainer}>
              <Text style={{color:"#808080"}}>Flower Dress</Text>
              <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <Text>$ 75</Text>
                <Fontisto name="heart-alt" size={10} color="red" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 15,
  },
  middleContent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#dcdcdc",
    padding: 7,
    paddingHorizontal: 15,
    marginVertical: 2,
    borderRadius: 5,
    justifyContent: "space-between",
},
middleSearch: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
},
input: {},
categoryhead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 14,
    color: "#d2691e",
},
cardContainer: {
    // display:'flex',
    flexDirection: "row",
    paddingHorizontal: 5,
    height:100,
    flexGrow:0
  },
  imgContainer: {
    width: 70,
    height: 70,
    position: "relative",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  imgHover: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    opacity: 0.5,
    borderRadius: 10,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popularHead:{
    width:'100%',
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  bottomCardContainer:{
    flex:1,
    // flexWrap:'wrap',
    paddingVertical:10,
    gap:15
  },
  cardBody:{
    width:170,
    height:170,
    backgroundColor:'#cd853f',
    // padding:10,
    borderRadius:10,
    overflow:'hidden'
  },
  image2:{
    width:100,
    height:130,
    marginTop:20,
    marginHorizontal:'auto'
  },
  textContainer:{
    position:'absolute',
    backgroundColor:"#e6e6fa",
    bottom:0,
    width:"100%",
    height:70,
    paddingHorizontal:10,
    gap:10,
    paddingTop:10
  },
  hero:{
    flexDirection:"row",
    backgroundColor:'#cd853f',
    width:"100%",
    marginTop:10,
    borderRadius:10,
    justifyContent:"space-between"
  },
  heroImg:{
    width:100,
    height:110,
  },
  heroTextContener:{
    marginVertical:10,
    gap:5,
    marginTop:20
  }
});
