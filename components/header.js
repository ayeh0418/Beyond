import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function header({ navigation }) {
    return (
        <View 
            style={{justifyContent: 'end'}} 
            onPress={() =>
                navigation.navigate('Profile')
            }
        >
            <Image
                style={styles.profilePicture}
                source={{uri: 'https://i.pinimg.com/originals/89/0a/80/890a8071bb8015356f8ea17ecd3132c6.jpg',}}
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    profilePicture : {
      borderColor: 'black',
      width: 50,
      height: 50,
      borderRadius: 100
    }
});
  