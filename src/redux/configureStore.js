import { configurStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer from '.rockets/reduders';

const reducer = { rocketReducer };

const store = configurStore({
  reducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare(),.concat(logger),
  devTools: process.env.NODE_ENV != 'production',
});

export default store;