import {createSlice} from '@reduxjs/toolkit';

import {workers, WorkerType} from '../../../common';

interface initialStateType {
    workers: WorkerType
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
