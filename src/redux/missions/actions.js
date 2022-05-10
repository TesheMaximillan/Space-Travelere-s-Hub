/* eslint-disable camelcase */
import { getMissions } from '../../API/services';
import RETRIEVE_MISSIONS from './types';

const retrieveMissions = () => async (dispatch) => {
  // Get missions from API
  const response = await getMissions();
  const { mission_id, mission_name, description } = response.data;

  // Organizing Missions
  const missions = response.data.map(() => ({
    mission_id,
    mission_name,
    description,
  }));

  // Add book to the store
  dispatch({ type: RETRIEVE_MISSIONS, missions });
};

export default retrieveMissions;
