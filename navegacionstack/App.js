import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importamos las pantallas desde la carpeta 'screens'
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

// Creamos un StackNavigator
const Stack = createStackNavigator();


// CODIGO SEBAS TAREA IMPORTO ELEMENTOS Y EXPLICO //

// SCREEN1 VA A SCREEN2 , SCREEN2 A SCREEN3, Y SCREEN3 SE DEVUELVE
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

// replace, reset y condicional 
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';


export default function App() {
  return (
    // El NavigationContainer es el contenedor principal que maneja toda la navegación en la app
    <NavigationContainer>
      {/* El Stack.Navigator maneja la pila de pantallas para la navegación de stack */}
      <Stack.Navigator initialRouteName="Home">
        {/* Cada Stack.Screen representa una pantalla en el stack */}
        {/* 'navigation' será automáticamente pasado a cada pantalla */}
      
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />

        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5} />
        <Stack.Screen name="Screen6" component={Screen6} />

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
