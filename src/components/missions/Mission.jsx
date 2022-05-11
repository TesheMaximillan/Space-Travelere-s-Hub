/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Status from './Status';

function Mission({ mission }) {
  const [status, setStatus] = useState('NOT A MEMBER');

  const handleStatus = () => (status === 'NOT A MEMBER'
    ? setStatus('Active Member')
    : setStatus('NOT A MEMBER'));

  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <Status status={status} handleStatus={handleStatus} />
    </tr>
  );
}

export default Mission;
