/* eslint-disable no-undef */
import { getRocket } from '../../API/provision';
import RETRIEVE_ROCKETS from './types';

const retrieveRockets = () => async (dispatch) => {
  // fetch rockets from the API
  const response = await getRocket();

  // organise Rockets
  const rockets = response.data.map((data) = ({
    rocket_id: data.rocket_id,
    rocket_name: data.rocket_name,
    description: data.rocket_description,
    flickr_images: data.rocket_images,
  }));

  // combine data to the store
  dispatch({ tpe: RETRIEVE_ROCKETS, rockets });
};

export default retrieveRockets;
