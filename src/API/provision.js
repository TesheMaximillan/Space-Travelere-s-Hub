import { rocketsAPI, missionsAPI } from './API';

const getRockets = () => rocketsAPI.get();
const getMissions = () => missionsAPI.get();

export { getMissions, getRockets };
