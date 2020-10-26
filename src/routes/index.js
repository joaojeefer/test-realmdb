import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RepositoryList } from '../pages';

const { Navigator, Screen } = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Navigator>
          <Screen name="RepositoryList" component={RepositoryList} options={{ headerShown: false }} />
        </Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;