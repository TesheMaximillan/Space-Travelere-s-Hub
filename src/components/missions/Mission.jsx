/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateMissionStatus } from '../../redux/missions/actions';
import Status from './Status';

function Mission({ mission }) {
  const dispatch = useDispatch();
  const {
    mission_id, mission_name, status, description,
  } = mission;

  const handleStatus = () => dispatch(updateMissionStatus(mission_id, !status));

  return (
    <tr>
      <td>{mission_name}</td>
      <td>{description}</td>
      <Status status={status} handleStatus={handleStatus} />
    </tr>
  );
}

export default Mission;
