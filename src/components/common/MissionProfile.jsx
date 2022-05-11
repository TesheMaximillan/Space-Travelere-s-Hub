import React from 'react';
import { useSelector } from 'react-redux';

function MissionProfile({ list }) {
  const missions = useSelector((state) => state.missionReducer);

  return (
    missions
    && missions.map(
      (mission) => mission.status && (
      <li key={mission.mission_id} className={list}>
        {mission.mission_name}
      </li>
      ),
    )
  );
}

export default MissionProfile;
