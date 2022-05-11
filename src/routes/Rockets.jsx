/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRocketData = createAsyncThunk('rocket/getData', async () =>{
  const response = await axios('https://api.spacexdata.com/v3/rockets');
  return response.data;
});

const rocketSlice = createSlice({
  name: 'rocketsSlice',
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: {
    [getRocketData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default rocketSlice.reducer;

// import React from 'react';
// import { useSelector } from 'react-redux';

// function Rockets() {
//   const rockets = useSelector((state) => state.rocketReducer);
//   return (
//     <ul>
//       {rockets && rockets.map((rocket) => (
//         <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
//       ))}
//     </ul>
//   );
// }

// export default Rockets;
