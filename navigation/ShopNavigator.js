import { Platform } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

import Colors from '../constants/Colors';

const Stack = createStackNavigator();

function ShopNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsOverview" 
        component={ProductsOverviewScreen} 
        options={{
          title: 'All Products',
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
         
        }}
        />
        <Stack.Screen name="ProductDetail" 
        component={ProductDetailScreen} 
        options={({ route }) => ({ title: route.params.productTitle })}
        
        // options={{
        //   headerStyle: {
        //     backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        //   },
        //   headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
         
        // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ShopNavigator;
