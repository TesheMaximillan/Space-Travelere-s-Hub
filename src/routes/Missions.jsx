import React from 'react';
import { useSelector } from 'react-redux';
import Mission from '../components/Mission';
import styles from './Missions.module.scss';

function Missions() {
  const missions = useSelector((state) => state.missionReducer);

  const { table } = styles;

  return (
    <table className={table}>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>

      </thead>
      <tbody>
        {missions && missions.map((mission) => (
          <Mission key={mission.id} mission={mission} />
        ))}

      </tbody>
      <tfoot />
    </table>
  );
}

export default Missions;
