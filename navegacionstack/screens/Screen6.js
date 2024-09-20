import React from 'react';
import { View, Button, Text } from 'react-native';

const Screen6 = ({ navigation, route }) => {
    const { param } = route.params;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen 6</Text>
        <Text>{param}</Text>
        <Button title="Ir a Screen 2 Condicional" onPress={() => {
            const condition = true; // Cambia según tu lógica
            if (condition) {
              navigation.navigate('Screen2');
            } else {
              alert('Condición no cumplida');
            }
          }} />
      </View>
    );
  };

  export default Screen6;