import React, { useEffect, useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "react-native-paper";
//import * as ImagePicker from "expo-image-picker"
// declare types for your props here

export default function rating ({navigation}) {
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Button
            labelStyle={styles.buttonStyle}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.textTitleRight}>Done</Text>
          </Button>
        </View>
        <View style={styles.containerPicture}>
         
            <Image
                style={styles.profilePicture}
                source={{ uri: "https://i.pinimg.com/originals/0f/87/6d/0f876dd5fa9ccc758e1b0ec0c5f1619f.jpg" }}
            />
            <Text style={styles.textTitle}>
                Gojo Sensei
            </Text>
            <Text style={styles.favorTitle}>
                Ninjutsu Tutoring
            </Text>
            <Image
                style={styles.starPicture}
                source={{ uri: "http://clipart-library.com/images/8TzKE7yRc.png" }}
            />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    alignItems: "center",
    height: windowHeight
  },
  containerPicture: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 10,
    //height: windowHeight * 0.29
  },
  containerTest: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginLeft: 25,
    justifyContent: "space-between",
    textAlignVertical: "top",
    height: windowHeight * 0.08
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    width: "100%",
    height: windowHeight * 0.06
  },
  profileRows:{
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  halfFlex:{
    flex: 1,
  },
  textTitle: {   
    padding: 5,
    fontSize: 24,
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "normal"
  },
  favorTitle: {   
    fontSize: 24,
    padding: 5,
    color: "#E79191",
    fontStyle: "normal",
    fontWeight: "normal"
  },
   nameTitle: {
    fontSize: 24,
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "normal"
  },
  textTitleLeft: {
    fontSize: 18,
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "normal"
  },
  textTitleRight: {
    position: 'absolute',
    right: 16,
    fontSize: 18,
    color: "#E79191",
    fontStyle: "normal",
    fontWeight: "normal"
  },
  profilePicture: {
    flexDirection: "column",
    borderColor: "#000000",
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 0.5
  },
  starPicture: {
    flexDirection: "column",
    paddingTop: 10,
    //borderColor: "#000000",
    height: 75,
    width: 370,
    //borderRadius: 100,
    //borderWidth: 0.5
  },
  textContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputFontStyle: {
    borderColor: "black",
    backgroundColor: "#fff",
    height: 25,
    width: windowWidth * 0.45,
    color: "#666666",
    padding: 0,
    margin: 0,
    fontSize: 18,
  },
  inputFontStyleMultiline: {
    borderColor: "black",
    backgroundColor: "#fff",
    width: windowWidth * 0.9,
    color: "#666666",
    fontSize: 18,
  },
  inputFontStyleLabelBottom: {
    color: "#666666",
    fontSize: 18,
    marginRight: 20,
    fontWeight: "500"
  },
  buttonStyle: {
    textTransform: "none",
    fontSize: 18
  }
});