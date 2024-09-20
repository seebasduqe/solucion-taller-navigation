import React from 'react';
import { View, Button, Text } from 'react-native';

const Screen3 = ({ navigation, route }) => {
    const { param } = route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 3</Text>
        <Text>{param}</Text>
        <Button title="Regresar" onPress={() => navigation.goBack()} />
      </View>
    );
  };

  export default Screen3;