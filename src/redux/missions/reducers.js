/* eslint-disable default-param-last */
import RETRIEVE_MISSIONS from './types';

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case RETRIEVE_MISSIONS:
      return action.missions;
    default:
      return state;
  }
};

export default missionReducer;
