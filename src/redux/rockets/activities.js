/* eslint-disable no-undef */
import { getRockets } from '../../API/services';
import RETRIEVE_ROCKETS from './types';

const retrieveRockets = () => async (dispatch) => {
  // fetch rockets from the API
  const response = await getRockets();

  // organise Rockets
  const rockets = response.data.map((data) => ({
    rocket_id: data.rocket_id,
    rocket_name: data.rocket_name,
    description: data.description,
    flickr_images: data.flickr_images[0],
  }));

  // combine data to the store
  dispatch({ type: RETRIEVE_ROCKETS, rockets });
};

export default retrieveRockets;
