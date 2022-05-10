import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionReducer from './missions/reducers';

const reducer = { missionReducer };

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
