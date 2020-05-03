import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import {RootReducer} from './redux/reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {PersistGate} from 'redux-persist/integration/react';

import logger from 'redux-logger';

import Home from './Home';
import {AppNavigator} from './AppNavigator';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let persistedReducer = persistReducer(persistConfig, RootReducer);

let store = createStore(persistedReducer, applyMiddleware(logger));
let persistor = persistStore(store);
// persistor.purge();

export const ReduxStore = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};
