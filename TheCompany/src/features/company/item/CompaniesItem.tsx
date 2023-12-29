import {FC} from 'react';

import {InitialCompanyTypes} from '../../../common';

import {useAppDispatch} from '../../../store/hook.ts';
import {changeStatusCompany} from '../reducer/CompanyReducer.ts';

import s from './CompanyItem.module.scss';

interface ICompaniesItem {
  company: InitialCompanyTypes
}

export const CompaniesItem: FC<ICompaniesItem> = ({company}) => {

  const dispatch = useAppDispatch();
  const onClickCheckHandler = (companyId: string) => dispatch(changeStatusCompany(companyId));

  return (
    <tr className={`${company.isChecked ? s.editCompany : ''}`}>
      <td>
        <input
          type="checkbox"
          checked={company.isChecked}
          onClick={() => onClickCheckHandler(company.id)}
        />
      </td>
      <td>{company.name}</td>
      <td>{company.count}</td>
      <td>{company.address}</td>
    </tr>
  );
};
