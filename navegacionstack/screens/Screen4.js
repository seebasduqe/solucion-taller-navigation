import React from 'react';
import { View, Button, Text } from 'react-native';

const Screen4 = ({ navigation, route }) => {
    const { param } = route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 4</Text>
        <Text>{param}</Text>
        <Button title="Reemplazar con Screen 1" onPress={() => navigation.replace('Screen1')} />
      </View>
    );
  };

  export default Screen4;