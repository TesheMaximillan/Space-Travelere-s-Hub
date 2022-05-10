/* eslint-disable camelcase */
import { getMissions } from '../../API/services';
import RETRIEVE_MISSIONS from './types';

const retrieveMissions = () => async (dispatch) => {
  // Get missions from API
  const response = await getMissions();

  // Organizing Missions
  const missions = response.data.map((data) => ({
    mission_id: data.mission_id,
    mission_name: data.mission_name,
    description: data.description,
  }));

  // Add book to the store
  dispatch({ type: RETRIEVE_MISSIONS, missions });
};

export default retrieveMissions;
