import React from 'react';
import { View, Button, Text } from 'react-native';

const Screen2 = ({ navigation, route }) => {
    const { param } = route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 2</Text>
        <Text>{param}</Text>
        <Button title="Ir a Screen 3" onPress={() => navigation.navigate('Screen3', { param: 'Hola desde Screen 2' })} />
      </View>
    );
  };

export default Screen2;