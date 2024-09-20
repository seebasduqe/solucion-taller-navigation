import * as React from 'react';
import { View, Text } from 'react-native';

// Cada pantalla recibe automáticamente un objeto 'navigation' para manejar la navegación, aunque en este caso no lo utilizamos
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Contenido simple de la pantalla Home */}
      <Text>Pantalla de Inicio (HomeScreen)</Text>
    </View>
  );
}
