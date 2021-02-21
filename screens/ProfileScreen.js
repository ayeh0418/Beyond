//import React, { Component } from "react";
//mport { Button, TextInput, View } from "react-native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch
} from "react-native";
import { Button } from "react-native-paper";

export default function ProfileScreen({ navigation }) {
 //   const [image, setImage] = useState(null);
  //  const [textZone, setTextZone] = useState("");
  //  const [textName, setTextName] = useState("");
  //  const windowWidth = Dimensions.get("window").width;
  //  const windowHeight = Dimensions.get("window").height;
  //  const [isEnabled, setIsEnabled] = useState(false);
  //  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
          <View style={styles.row}>

              <Button
            labelStyle={styles.buttonStyle}
            onPress={() => navigation.navigate('Help Listings')}
          >
            <Text style={styles.textTitleRight}>Back</Text>
          </Button>


          <Button
                labelStyle={styles.buttonStyle}
                onPress={() => navigation.navigate('Rating')}
              >
                <Text style={styles.editButtonStyle}>View Rating</Text>
              </Button>

         </View>
         
   
         <View style ={{flexDirection: 'row'}}>
           <View style = {{flexDirection: 'column'}}>
             <View style = {styles.containerPicture}>
               <Image
                 style={styles.profilePicture}
                 source={{
                   uri: 'https://i.pinimg.com/originals/0f/87/6d/0f876dd5fa9ccc758e1b0ec0c5f1619f.jpg',
                 }}
               />
             </View>
           </View>
           <View style = {{flexDirection: 'column'}}>
             <Text style = {styles.usernameStyle}>Gojo Senpai</Text>
             <Text style = {styles.zoneStyle}>56 Favors Accomplished</Text>
           </View>
         </View>
   
       
         <View>
         <Text style={styles.notificationSettingStyle}> About Me </Text>
         <Text style = {styles.descStyle}>Gojo is the strongest Jujutsu Sorcerer in the world, 
         said to be on par with the King of Curses Sukuna himself. Like most sorcerers, Satoru 
         strived to protect Japan from the Cursed Spirits that plagued it. However, Gojo saw the 
         structure of Jujutsu Sorcerer society as flawed, and as such hoped to change it for the better. 
         </Text>
         </View>
   
         
   
       </View>
     );
   }
    
const styles = StyleSheet.create({
    buttonStyle: {
      textTransform: "none",
      fontSize: 18,
    },
    
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    containerPicture: {
      backgroundColor: "#fff",
      alignItems: "center",
      paddingTop: 10,
     // height: windowHeight * 0.23,
      marginLeft:20
    },
  
    containerTest: {
      backgroundColor: "#fff",
      alignItems: "flex-start",
      alignSelf: "flex-start",
      marginLeft: 25,
      justifyContent: "space-between",
      textAlignVertical: "top",
    //  height: windowHeight * 0.08
    },
  
    editButtonStyle: {
      fontSize: 18,
      color: "#E79191",
      fontStyle: "normal",
      fontWeight: "normal",
    },
  
    notificationSettingStyle:{
      paddingTop: 10,
      marginLeft: 47, 
      fontStyle: "normal",
      fontWeight: "normal", 
      color: "#000000",
      fontSize: 22,
      lineHeight:30,
      paddingTop: 5,
    },
  
    textTitleRight: {
      position: 'absolute',
      right: 16,
      fontSize: 18,
      color: "#E79191",
      fontStyle: "normal",
      fontWeight: "normal"
    },

    optionsStyle:{
      fontSize: 16,
      color: '#666666',
      fontStyle: "normal",
      fontWeight: "normal", 
      marginLeft: 30,
      lineHeight: 30
    },
    
    profilePicture : {
      flexDirection: 'column',
      borderColor: 'black',
      width: 150,
      height: 150,
      borderRadius: 100
    },
  
    row: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      justifyContent: "space-between",
      width: "100%",
    //  height: windowHeight * 0.06
    },
  
    textTitle: {
      fontSize: 24,
      color: "#000000",
      fontStyle: "normal",
      fontWeight: "normal",
      textAlign: "center",
      marginLeft: 160
    },
     
    toggleStyle:{
      marginLeft:80,
      transform: [{scale:.8}]
    },
      
    usernameStyle: { 
      alignContent:'center',
      top:'30%',
      paddingTop: 10,
      fontSize: 26, 
      marginLeft: 10,
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#000",
    },
  
    zoneStyle:{
      paddingTop: 5,
      alignContent:'center',
      top:'30%',
      fontSize: 16, 
      marginLeft: 10,
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#E79191",
    },

    descStyle:{
      alignContent:'center',
      //top:'30%',
      //paddingTop: 5,
      fontSize: 15, 
      paddingTop: 7,
      paddingLeft: 15,
      paddingRight: 15,
      fontStyle: "normal",
      fontWeight: "normal",
      color: "#666666",
    },
});