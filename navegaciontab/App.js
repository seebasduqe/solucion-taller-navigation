import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

// Importamos las pantallas desde la carpeta 'screens'
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';

// CODIGO SEBAS //
import ImageScreen from './screens/ImageScreen';
import OptionsScreen from './screens/OptionsScreen';
import QuizScreen from './screens/QuizScreen';

// 5. IMPORTACION DE ICONOS 
import { Ionicons } from 'react-native-vector-icons/Ionicons';



// Creamos el BottomTabNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // El NavigationContainer es el contenedor principal que maneja la navegación de toda la app
    <NavigationContainer>
      {/* El BottomTabNavigator renderiza las pestañas en la parte inferior */}
      <Tab.Navigator
        screenOptions={{
        tabBarStyle: { paddingBottom: 5, paddingTop: 5, margin: 5 },
        }}
        >

        <Tab.Screen name="Images" component={ImageScreen} />
        <Tab.Screen name="Options" component={OptionsScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
