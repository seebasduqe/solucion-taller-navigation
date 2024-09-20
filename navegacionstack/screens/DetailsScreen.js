import * as React from 'react';
import { View, Text } from 'react-native';

// El parámetro 'route' contiene información sobre la ruta actual y los parámetros pasados
// En este caso, 'route.params' contiene los parámetros enviados desde 'HomeScreen'
export default function DetailsScreen({ route }) {
  // Desestructuramos 'message' de 'route.params'
  const { message } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalles Screen</Text>
      {/* Mostramos el mensaje que recibimos desde 'HomeScreen' */}
      <Text>{message}</Text>
    </View>
  );
}
