import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import App from './App.js';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './js/redux/reducer'

import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

console.disableYellowBox = true

AppRegistry.registerComponent('Mod5Frontend', () => WrappedApp
);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => WrappedApp);
