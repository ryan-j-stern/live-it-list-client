import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';
import store from './src/redux/store';

import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/components/navigation/stack.component';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
