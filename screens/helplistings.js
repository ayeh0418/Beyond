import React, {Component} from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// TODO: img
const test = [
    {key: "Naruto", img: "", title: "Raking the backyard"},
    {key: "Sasuke", img: "", title: "In need of tutoring"},
    {key: "Sakura", img: "", title: "Buying groceries"},
    {key: "Panda", img: "", title: "Buy at FootLocker"},
    {key: "Kakashi", img: "", title: "Boosting in League"},
    {key: "Gojo", img: "", title: "Lawnmowing friday"},
    {key: "Satoru", img: "", title: "Maintaining plants"},
    {key: "Andrew", img: "", title: "Move in to college"},
    {key: "Angela", img: "", title: "Go on boba date"}
];

export default function helplistings({ navigation }) { 
  return (
    <View style={{flex: 1}}>
      <View 
        style={{
          flex: 0.1, 
          flexDirection: 'row-reverse', 
          borderBottomWidth: 2, 
          borderBottomColor: '#E79191',
          justifyContent: "space-between"
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}>
          <Image
            style={{ width: 50, height: 50}}
            source={{ uri: 'https://pics.freeicons.io/uploads/icons/png/15211315791553239378-512.png', }}
          />
        </TouchableOpacity>
        <View>
        <Text style={styles.textTitleLeft}>Lend a hand !</Text>
        </View>
      </View>
      
        <View style={styles.rowStyling}>
        <FlatList
          data={test}
          renderItem={({item}) => (
            <View style={styles.container}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={styles.profilePicture}
                  source={{ uri: 'https://i.pinimg.com/originals/89/0a/80/890a8071bb8015356f8ea17ecd3132c6.jpg', }}
                />
                <View style={{ paddingTop: 10 }}>
                  <Text style={{paddingLeft: 12}}>Name: {item.key}</Text>
                  <Text style={{paddingLeft: 12}}>Favor: {item.title}</Text>
                </View>
              </View>
              <Button title="help!" />
            </View>
          )}
        />
      </View>
      <View style={{flex:0.15}}>
        <TouchableOpacity
          color='#ff9696'
          style={styles.request}
          title="NEED A FAVOR"
          onPress={() =>
            navigation.navigate("NEED A FAVOR")
          }
        >
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>NEED A FAVOR!</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#20232a',
    flexDirection: 'row',
    justifyContent: 'space-around',
    //paddingLeft: 50,
    //paddingRight: 100,
    //justifyContent: 'space-between'
  },

  profilePicture : {
    borderColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 100,
    marginTop: 10, 
    marginBottom: 10
  },

  rowStyling: {
    flex: 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },

  textTitleLeft: {
    textAlign: 'left',
    paddingLeft: 20,
    fontSize: 20,
    top: 15,
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "bold"
  },

  request: {
    alignItems: "center",
    backgroundColor: '#FF7373',
    padding: 35
  }
});