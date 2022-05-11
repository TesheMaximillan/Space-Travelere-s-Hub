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
        <div key={rocket.rocket_id} className={rocketsItems}>
          <img className={rocketsImg} src={rocket.flickr_images} alt="Rocket setoff" />
          <div>
            <span className={rocketsTitle}>
              {rocket.rocket_name}
            </span>
            <span className={rocketsDescr}>
              {rocket.description}
            </span>
            <span><button className={Btn} type="submit">Reserve Rocket</button></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
