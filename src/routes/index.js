import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from '../store';
import { RepositoryList } from '../pages';

const { Navigator, Screen } = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator>
          <Screen name="RepositoryList" component={RepositoryList} options={{ headerShown: false }} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;