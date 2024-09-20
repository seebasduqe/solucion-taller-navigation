import React from 'react';
import { View, Button, Text } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 1</Text>
      <Button title="Ir a Screen 2" onPress={() => navigation.navigate('Screen2', { param: 'Hola desde Screen 1' })} />
    </View>
  );
};

export default Screen1;