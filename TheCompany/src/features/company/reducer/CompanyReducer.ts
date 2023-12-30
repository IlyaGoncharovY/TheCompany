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
    changeStatusAllCompany: (state, action: PayloadAction<boolean>) => {
      state.companies = state.companies.map((company) => ({
        ...company,
        isChecked: action.payload,
      }));
    },
  },
});
export const {changeStatusCompany, changeStatusAllCompany} = CompanyReducer.actions;

export default CompanyReducer.reducer;
