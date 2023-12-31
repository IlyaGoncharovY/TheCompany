import {ChangeEvent, FC, useCallback} from 'react';

import {v1} from 'uuid';

import {useAppDispatch} from '../../../../store';
import {
  addNewCompany,
  changeStatusAllCompany,
  deleteCompany,
  InitialCompanyTypes,
} from '../../reducer/CompanyReducer.ts';
import {CommonHeader} from '../../../../common';
import {companyTableHeader} from '../../../../common';

interface IHeaderCompany {
  companies: InitialCompanyTypes[]
}

export const HeaderCompany: FC<IHeaderCompany> = ({companies}) => {

  const dispatch = useAppDispatch();

  const checkedCompanyIds = companies.filter((company) => company.isChecked)
    .map((company) => company.id);

  const checkOnChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    dispatch(changeStatusAllCompany(isChecked));
  }, [dispatch]);

  const addNewCompanyHandler = useCallback(() => {
    const newCompany = {
      id: v1(),
      isChecked: false,
      name: 'newName',
      count: 0,
      address: 'newAddress',
    };
    dispatch(addNewCompany(newCompany));
  }, [dispatch]);

  const deleteCompanyHandler = useCallback(() => {
    checkedCompanyIds.forEach((companyId) => {
      dispatch(deleteCompany(companyId));
    });
  }, [checkedCompanyIds, dispatch]);

  return (
    <CommonHeader
      items={companies}
      checkOnChangeHandler={checkOnChangeHandler}
      addNewItemHandler={addNewCompanyHandler}
      deleteItemHandler={deleteCompanyHandler}
      dataForTable={companyTableHeader}
      itemName="Компании"
    />
  );
};
