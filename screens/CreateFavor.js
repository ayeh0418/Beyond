import React, {Component} from 'react';
import {AsyncStorage, Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import dateFormat from 'dateformat';

class CreateFavor extends Component {

   constructor(props) {
      super(props);
      this.state = {
        isDateTimePickerVisible: false,
        favors: [],
        favor: '',
        location: '',
        dateTime: '',
      };
    }
    showDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: false });
    };
  
    handleDateTimePicked = (datetime) => {
      
      let input = new String(datetime);
      input = dateFormat(input, "mmmm dS, yyyy h:MM TT");
      console.log(input);

      this.setState({ dateTime: input });

      this.hideDateTimePicker();
    };

   handleLocation = (text) => {
      this.setState({ location: text })
   }
   handleFavor = (text) => {
      this.setState({ favor: text })
   }

   // componentDidMount() {
   //    AsyncStorage.getItem("this.state.text").then((value) => {
   //        this.setState({'this.state.text':value});
   //    });
   // }

   // storeData = async () => {
   //    try {
   //      await AsyncStorage.setItem("this.state", JSON.stringify(value));
   //    } catch (error) {
   //       console.error('AsyncStorage#setItem error: ' + error.message);
   //    }
   //  };

   render() {
      return (
         <View style = {styles.container}>
            <View style={{ flex: 6, paddingTop: 20 }}>
               <Button title="Select date and time." onPress={this.showDateTimePicker} />
               <DateTimePicker
                  mode="datetime"
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleDateTimePicked}
                  onCancel={this.hideDateTimePicker}
               />
               <Text style={styles.datetxt}>{this.state.dateTime}</Text>
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Enter your location."
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handleLocation}/>
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Enter your favor."
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handleFavor}/> 
               </View> 
            <View style={{flex:1}}>
               <TouchableOpacity
                  color='#ff9696'
                  style={styles.request}
                  title="SUBMIT"
                  onPress={() =>
                     this.props.navigation.navigate('Help Listings')
                  }
               >
                  <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>SUBMIT</Text>
               </TouchableOpacity>
            </View>
         </View>
      )
   }
}

export default CreateFavor;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   request: {
      alignItems: "center",
      backgroundColor: '#FF7373',
      padding: 40
   },
   datetxt: {
      marginLeft: 15
   }
})
