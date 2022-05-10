import axios from 'axios';

const rocketAPI = axios.create({
  endPoint: 'https://api.spacexdata.com/v3/rockets',
  headers: { 'Content-type': 'application/json' },
});

const missionAPI = axios.create({
  endPoint: 'https://api.spacexdata.com/v3/missions',
  headers: { 'Content-type': 'application/json' },
});

export { rocketAPI, missionAPI };