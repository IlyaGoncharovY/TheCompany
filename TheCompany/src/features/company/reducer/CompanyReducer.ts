import {createSlice} from '@reduxjs/toolkit';

import {companies, CompanyType} from '../../../common';

interface initialStateType {
  companies: CompanyType[];
}

const initialState: initialStateType = {
  companies,
};

const CompanyReducer = createSlice({
  name: 'CompanyReducer',
  initialState,
  reducers: {
  },
});
export const {} = CompanyReducer.actions;

export default CompanyReducer.reducer;
