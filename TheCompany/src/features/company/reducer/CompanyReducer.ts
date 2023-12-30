import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialCompanyTypes = {
  id: string,
  isChecked: boolean
  name: string
  count: number | null
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
    editCompanyBody: (
      state,
      action: PayloadAction<{ companyId: string; editedName: string; editedAddress: string }>
    ) => {
      const { companyId, editedName, editedAddress } = action.payload;

      const companyIndex = state.companies.findIndex((company) => company.id === companyId);

      if (companyIndex !== -1) {
        state.companies[companyIndex].name = editedName;
        state.companies[companyIndex].address = editedAddress;
      }
    },
  },
});
export const {
  changeStatusCompany,
  changeStatusAllCompany,
  addNewCompany,
  deleteCompany,
  editCompanyBody,
} = CompanyReducer.actions;

export default CompanyReducer.reducer;
