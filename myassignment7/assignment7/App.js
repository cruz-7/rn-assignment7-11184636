import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CartProvider } from './screens/CartContext';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ProductDescriptionScreen from './screens/ProductDescriptionScreen';
import SideMenu from './components/SideMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CheckoutScreen"
      component={CheckoutScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductDescriptionScreen"
      component={ProductDescriptionScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CartProvider>
        <NavigationContainer>
          <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
            <Drawer.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
          </Drawer.Navigator>
        </NavigationContainer>
      </CartProvider>
    </GestureHandlerRootView>
  );
}
