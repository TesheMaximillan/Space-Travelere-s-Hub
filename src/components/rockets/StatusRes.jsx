/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import styles from './StatusRes.module.scss';

function Status({ status, handleStatus }) {
  const {
    btnRocket, statusBg, btnLeave, statusActive,
  } = styles;

  if (status) {
    return (
      <>
        <div>
          <span className={statusActive}>Why</span>
        </div>
        <div>
          <button type="button" className={`${btnRocket} ${btnLeave}`} onClick={handleStatus}>
            Cancel Reservation
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <span className={statusBg}>Reserved</span>
      </div>
      <div>
        <button type="button" className={btnRocket} onClick={handleStatus}>
          Reservation
        </button>
      </div>
    </>
  );
}

export default Status;
