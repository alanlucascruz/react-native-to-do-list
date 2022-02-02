/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import store from './store';

import List from './screens/List';

StatusBar.setBackgroundColor('#003491');
StatusBar.setBarStyle('light-content');

const App = () => {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
};

export default App;
