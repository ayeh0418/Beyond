import React from 'react';
import { Button } from 'react-native';

export default function HomeScreen ({ navigation }) {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    );
  };

export { HomeScreen };