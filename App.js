import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import StopWatch from './src/screens/StopWatch';
import ModalCard from './src/screens/ModalCard';
import Todo from './src/screens/Todo';
import News from './src/screens/News';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="StopWatch" component={StopWatch} />
        <Stack.Screen name="ModalCard" component={ModalCard} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
