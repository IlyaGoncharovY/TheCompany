import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialCompanyTypes = {
  id: string,
  isChecked: boolean
  name: string
  count: number
  address: string
}

interface initialStateType {
  companies: InitialCompanyTypes[];
}

const initialState: initialStateType = {
  companies: [
    {
      id: '',
      isChecked: false,
      name: '',
      count: 0,
      address: '',
    },
  ],
};

const CompanyReducer = createSlice({
  name: 'CompanyReducer',
  initialState,
  reducers: {
    changeStatusCompany: (state, action: PayloadAction<string>) => {
      state.companies = state.companies.map((company) =>
        company.id === action.payload
          ? { ...company, isChecked: !company.isChecked }
          : company,
      );
    },
    changeStatusAllCompany: (state, action: PayloadAction<boolean>) => {
      state.companies = state.companies.map((company) => ({
        ...company,
        isChecked: action.payload,
      }));
    },
    addNewCompany: (state, action: PayloadAction<InitialCompanyTypes>) => {
      state.companies.push(action.payload);
    },
    deleteCompany: (state, action: PayloadAction<string>) => {
      state.companies = state.companies.filter((el) => el.id !== action.payload);
    },
  },
});
export const {
  changeStatusCompany,
  changeStatusAllCompany,
  addNewCompany,
  deleteCompany,
} = CompanyReducer.actions;

export default CompanyReducer.reducer;
