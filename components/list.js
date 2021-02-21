import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// data [key, title]
export default function list( listingsData ) { 
  return (
    <FlatList
      data={listingsData}
      renderItem={({item}) => (
        <View style={styles.container}>
          <Text>Name: {item.key}</Text>
          <Text>Favor: {item.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#20232a',
      justifyContent: 'center',
    },
});
