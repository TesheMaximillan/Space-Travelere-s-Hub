import React from 'react';
import { useSelector } from 'react-redux';

function Missions() {
  const missions = useSelector((state) => state.missionReducer);

  return (
    <ul>
      {missions && missions.map((mission) => (
        <li key={mission.mission_id}>{mission.mission_name}</li>
      ))}
    </ul>
  );
}

export default Missions;
