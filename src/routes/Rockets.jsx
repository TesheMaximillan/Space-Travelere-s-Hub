import React from 'react';
import { useSelector } from 'react-redux';

function Rockets() {
  const rockets = useSelector((state) => state.rocketReducer);
  return (
    <ul>
      {rockets && rockets.map((rocket) => (
        <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
      ))}
    </ul>
  );
}

export default Rockets;
