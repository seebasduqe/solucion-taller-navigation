import React from 'react';
import { View, Button, Text } from 'react-native';

const Screen5 = ({ navigation, route }) => {
    const { param } = route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 5</Text>
        <Text>{param}</Text>
        <Button title="Reiniciar a Screen 1" 
        onPress={() => navigation.reset({
            index: 0,
            routes: [{ name: 'Screen1' }],
            })} />
      </View>
    );
  };

  export default Screen5;