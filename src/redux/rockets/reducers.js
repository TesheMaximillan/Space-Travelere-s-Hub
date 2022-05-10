/* eslint-disable default-param-last */
import RETRIEVE_ROCKETS from './types';

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case RETRIEVE_ROCKETS:
      return action.rockets;
    default:
      return state;
  }
};

export default rocketReducer;
