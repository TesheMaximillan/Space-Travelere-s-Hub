/* eslint-disable no-undef */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './rockets.module.scss';

const {
  rocketsContainer,
  rocketsItems,
  rocketsTitle,
  rocketsImg,
  rocketsDescr,
  Btn,
} = styles;

function Rockets() {
  const rockets = useSelector((state) => state.rocketReducer);
  return (
    <div className={rocketsContainer}>
      {rockets && rockets.map((rocket) => (
        <ul key={rocket.rocket_id} className={rocketsItems}>

          <li>
            <img className={rocketsImg} src={rocket.flickr_images} alt="Rocket setoff" />
          </li>
          <li className={rocketsTitle}>
            {rocket.rocket_name}
          </li>
          <li className={rocketsDescr}>
            {rocket.description}
          </li>
          <li>
            <button className={Btn} type="submit">Reserve Rocket</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Rockets;
