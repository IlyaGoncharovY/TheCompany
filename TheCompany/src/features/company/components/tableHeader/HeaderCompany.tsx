import {ChangeEvent, FC} from 'react';

import {v1} from 'uuid';

import {companyTableHeader, InitialCompanyTypes} from '../../../../common';
import {useAppDispatch} from '../../../../store/hook.ts';
import {addNewCompany, changeStatusAllCompany, deleteCompany} from '../../reducer/CompanyReducer.ts';

interface IHeaderCompany {
  companies: InitialCompanyTypes[]
}

export const HeaderCompany: FC<IHeaderCompany> = ({companies}) => {

  const dispatch = useAppDispatch();

  const checkedCompanyIds = companies.filter((company) => company.isChecked)
    .map((company) => company.id);

  const checkOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    dispatch(changeStatusAllCompany(isChecked));
  };

  const addNewCompanyHandler = () => {
    const newCompany = {
      id: v1(),
      isChecked: false,
      name: 'newName',
      count: 0,
      address: 'newAddress',
    };
    dispatch(addNewCompany(newCompany));
  };

  const deleteCompanyHandler = () => {
    checkedCompanyIds.forEach((companyId) => {
      dispatch(deleteCompany(companyId));
    });
  };

  return (
    <thead>
      <tr>
        <th>
      Компании
        </th>
        <th>
          <button
            onClick={addNewCompanyHandler}
          >
            Добавить компанию
          </button>
        </th>
        <th>
          <button
            onClick={deleteCompanyHandler}
            disabled={checkedCompanyIds.length === 0}
          >
            Удалить компанию
          </button>
        </th>
      </tr>
      <tr>
        <th>
          <input
            type="checkbox"
            onChange={checkOnChangeHandler}
          /> Выделить все
        </th>
        {companyTableHeader.map((el) =>
          <th key={el.id}>
            {el.title}
          </th>,
        )}
      </tr>
    </thead>
  );
};
