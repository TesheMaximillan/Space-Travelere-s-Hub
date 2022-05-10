import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Missions.module.scss';

function Missions() {
  const { status, setStatus } = useState('NOT A MEMBER');
  const missions = useSelector((state) => state.missionReducer);

  const { table, btnMission } = styles;

  const handleStatus = () => {
    if (status === 'NOT A MEMBER') setStatus('Active Member');
    else setStatus('NOT A MEMBER');
  };

  return (
    <table className={table}>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
      {missions && missions.map((mission) => (
        <tr key={mission.mission_id}>
          <td>{mission.mission_name}</td>
          <td>{mission.description}</td>
          <td>{status}</td>
          <td>
            <button type="button" className={btnMission} onClick={handleStatus}>Join Mission</button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default Missions;
