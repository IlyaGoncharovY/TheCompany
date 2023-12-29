import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {companies, InitialCompanyTypes} from '../../../common';

interface initialStateType {
  companies: InitialCompanyTypes[];
}

const initialState: initialStateType = {
  companies,
};

const CompanyReducer = createSlice({
  name: 'CompanyReducer',
  initialState,
  reducers: {
    changeStatusCompany: (state, action: PayloadAction<string>) => {
      state.companies = state.companies.map((company) =>
        company.id === action.payload
          ? { ...company, isChecked: !company.isChecked } : company,
      );
    },
  },
});
export const {changeStatusCompany} = CompanyReducer.actions;

export default CompanyReducer.reducer;
