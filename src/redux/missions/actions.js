/* eslint-disable camelcase */
import { getMissions } from '../../API/services';
import { CHANGE_MISSION_STATUS, RETRIEVE_MISSIONS } from './types';

const retrieveMissions = () => async (dispatch) => {
  // Get missions from API
  const response = await getMissions();

  // Organizing Missions
  const missions = response.data.map((data) => ({
    mission_id: data.mission_id,
    mission_name: data.mission_name,
    description: data.description,
  }));

  const newMission = missions.map((mission) => ({ ...mission, status: false }));

  // Add mission to the store
  dispatch({ type: RETRIEVE_MISSIONS, newMission });
};

const updateMissionStatus = (id, status) => ({
  type: CHANGE_MISSION_STATUS,
  payload: { id, status },
});

export { retrieveMissions, updateMissionStatus };
