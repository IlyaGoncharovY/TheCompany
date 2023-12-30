import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
    changeWorkerStatus: (state, action: PayloadAction<string>) => {
      const workerId = action.payload;

      for (const companyId in state.workers) {
        state.workers[companyId] = state.workers[companyId].map((worker) =>
          worker.id === workerId ? { ...worker, isChecked: !worker.isChecked } : worker,
        );
      }
    },
    changeWorkerAllStatus: (state, action: PayloadAction<{ isChecked: boolean; companyIds: string[] }>) => {
      const { isChecked, companyIds } = action.payload;

      companyIds.forEach((companyId) => {
        state.workers[companyId] = state.workers[companyId].map((worker) => ({
          ...worker,
          isChecked,
        }));
      });
    },
  },
});
export const {changeWorkerStatus, changeWorkerAllStatus} = WorkersReducer.actions;

export default WorkersReducer.reducer;
