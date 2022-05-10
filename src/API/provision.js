import { rocketAPI, missionAPI } from './API';

const getRocket = () => rocketAPI.get();
const getMission = () => missionAPI.get();

export { getMission, getRocket };
