/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import styles from './Status.module.scss';

function Status({ status, handleStatus }) {
  const {
    btnMission, statusBg, btnLeave, statusActive,
  } = styles;

  if (status === 'Active Member') {
    return (
      <>
        <td><span className={statusActive}>{status}</span></td>
        <td>
          <button type="button" className={`${btnMission} ${btnLeave}`} onClick={handleStatus}>
            Leave Mission
          </button>
        </td>
      </>
    );
  }

  return (
    <>
      <td><span className={statusBg}>{status}</span></td>
      <td>
        <button type="button" className={btnMission} onClick={handleStatus}>
          Join Mission
        </button>
      </td>
    </>
  );
}

export default Status;
