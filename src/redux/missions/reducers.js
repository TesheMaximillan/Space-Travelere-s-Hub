/* eslint-disable default-param-last */
import { CHANGE_MISSION_STATUS, RETRIEVE_MISSIONS } from './types';

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case RETRIEVE_MISSIONS:
      return action.newMission;
    case CHANGE_MISSION_STATUS: {
      const { id, status } = action.payload;
      const newState = state.map((mission) => {
        if (mission.mission_id !== id) {
          return mission;
        }
        return { ...mission, status };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionReducer;
