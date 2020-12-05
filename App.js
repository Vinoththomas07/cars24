import React from 'react';
import Home from './src/screens/Home';
import Modal from './src/components/Modal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none" >
          <RootStack.Screen name="Main" component={MainStackScreen} />
          <RootStack.Screen name="Modal" component={Modal} options={{
            ...TransitionPresets.ModalSlideFromBottomIOS
          }} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
