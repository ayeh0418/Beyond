import React, { PureComponent } from 'react';
import { View, Image, FlatList, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
//import styles from './styles';

export default class FavorList extends PureComponent {
    //Define your state for your component. 
    state = {
        //Assing a array to your pokeList state
        favorList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true
    }
    static navigationOptions = {
        title: 'List of Favors'
    }
    //Define your componentDidMount lifecycle hook that will retrieve data.
    //Also have the async keyword to indicate that it is asynchronous. 
    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const favorApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const fav = await favorApiCall.json();
            this.setState({favorList: fav.results, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    //Define your renderItem method the callback for the FlatList for rendering each item, and pass data as a argument. 
    renderItem(data) {
        return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    <View  style={styles.listItemContainer}>
                        <Text style={styles.favorItemHeader}>{data.item.name}</Text>
                        <Image source={{uri: 'https://i.pinimg.com/originals/89/0a/80/890a8071bb8015356f8ea17ecd3132c6.jpg'}} 
                                style={styles.favorImage}/>
                    </View>
                </TouchableOpacity>
    }
    render() {
        //Destruct favorList and Loading from state.
        const { favorList, loading } = this.state;
        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(!loading) {
            return <FlatList 
                    data={favorList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.name} 
                    />
        } else {
            return <ActivityIndicator />
        }
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#20232a',
      flexDirection: 'row',
      //justifyContent: 'space-around',
      padding: 5,
      //paddingLeft: 50,
      //paddingRight: 100,
      justifyContent: 'space-between'
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