import { configurStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer from '.rockets/reduders';

const reduder = { rocketReducer };

const store = 