import React, {Component} from 'react';
import { ScrollView, Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import CreateFavor from './CreateFavor';
// component

// TODO: img
const test = [
    {favor: "Lawn Mowing", location: "La Jolla", time: "March 10, 2021 12:00 PM"},
    {favor: "Buy Groceries", location: "Los Angeles", time: "June 18, 2021 3:00 PM"},
    {favor: "Cat Sit", location: "UTC", time: "May 22, 2021 5:00 PM"},
];

class MyListings extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isFetching: false,
          favors: []
      };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.1}}>
          <Button 
            title="Profile"
            onPress={() =>
              this.props.navigation.navigate('Profile')
            }
          />
        </View>
         
        <View style={styles.rowStyling}>
          <FlatList
            data={test}
            renderItem={({item}) => (
              <View style={styles.container}>
                <View>
                  <Text>Favor: {item.favor}</Text>
                  <Text>Location: {item.location}</Text>
                  <Text>Time: {item.time}</Text>
                </View>
              </View>
            )}
          />
        </View>

      </View>
      
    );
  }
}

export default MyListings;

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

  rowStyling: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
    // paddingLeft: 20,
    // paddingRight: 20
  },

  request: {
    alignItems: "center",
    backgroundColor: '#FF7373',
    padding: 26
  }
});