import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CurrWorkersType = {
  id: string
  companyId: string
  isChecked: boolean
  secondName: string
  name: string
  post: string
}

export type InitialWorkersType = {[key: string]: CurrWorkersType[]}

interface initialStateType {
  workers: InitialWorkersType;
}

const initialState: initialStateType = {
  workers: {},
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
    addNewWorker: (state, action: PayloadAction<{ [key: string]: CurrWorkersType }>) => {
      const newWorker = action.payload;
      const companyId = Object.keys(newWorker)[0];

      if (!state.workers[companyId]) {
        state.workers[companyId] = [];
      }
      if (companyId && state.workers[companyId]) {
        const existingWorker = state.workers[companyId].find(
          (worker) => worker.id === newWorker[companyId].id,
        );
        if (!existingWorker) {
          state.workers[companyId].push(newWorker[companyId]);
        }
      }
    },
    deleteWorker: (state) => {
      for (const companyId in state.workers) {
        state.workers[companyId] = state.workers[companyId].filter(
          (worker) => !worker.isChecked,
        );
      }
    },
    editWorkerBody: (state, action: PayloadAction<{
      companyId: string;
      workerId: string;
      editedSecondName: string;
      editedName: string;
      editedPost: string;
    }>) => {
      const { companyId, workerId, editedSecondName, editedName, editedPost } = action.payload;

      if (state.workers[companyId]) {
        const workerIndex = state.workers[companyId].findIndex((worker) => worker.id === workerId);

        if (workerIndex !== -1) {
          state.workers[companyId][workerIndex] = {
            ...state.workers[companyId][workerIndex],
            secondName: editedSecondName,
            name: editedName,
            post: editedPost,
          };
        }
      }
    },
  },
});

export const {
  changeWorkerStatus,
  changeWorkerAllStatus,
  addNewWorker,
  deleteWorker,
  editWorkerBody,
} = WorkersReducer.actions;

export default WorkersReducer.reducer;
