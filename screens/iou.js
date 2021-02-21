import React, {Component} from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// component
// import List from '../components/list';
import Header from '../components/header';

// TODO: img
const test = [
    {key: "PersonA", img: "https://i.pinimg.com/originals/89/0a/80/890a8071bb8015356f8ea17ecd3132c6.jpg", title: "Favor1"},
    {key: "PersonB", img: "", title: "Favor2"},

];

export default function myListings({ navigation }) { 
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1}}>
        <Button 
          title="Profile"
          onPress={() =>
            navigation.navigate('Profile')
          }
        />
        
      </View>
      
      <View style={{flex: 0.8}}>
        <FlatList
          data={test}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Image
                style={styles.profilePicture}
                source={{uri: 'https://i.pinimg.com/originals/89/0a/80/890a8071bb8015356f8ea17ecd3132c6.jpg',}}
              />
              <View>
                <Text>Name: {item.key}</Text>
                <Text>Favor: {item.title}</Text>
              </View>
            </View>
          )}
        />
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
    justifyContent: 'space-between',
    padding: 5,
    paddingLeft: 50,
    paddingRight: 100,
  },

  profilePicture : {
    borderColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 100
  },

  request: {
    alignItems: "center",
    backgroundColor: '#FF7373',
    padding: 26
  }
});