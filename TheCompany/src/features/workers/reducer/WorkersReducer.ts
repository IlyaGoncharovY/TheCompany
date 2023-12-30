import {createSlice} from '@reduxjs/toolkit';

import {InitialWorkersType, workers} from '../../../common';

interface initialStateType {
    workers: InitialWorkersType
}

const initialState: initialStateType = {
  workers,
};

const WorkersReducer = createSlice({
  name: 'WorkersReducer',
  initialState,
  reducers: {
  },
});
export const {} = WorkersReducer.actions;

export default WorkersReducer.reducer;
