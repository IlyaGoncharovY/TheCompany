import {FC} from 'react';

import {CompanyType} from '../../../common';

interface ICompaniesItem {
  company: CompanyType
}

export const CompaniesItem: FC<ICompaniesItem> = ({company}) => {
  return (
    <tr>
      <td>
        <input type="checkbox" checked={company.isEdit} />
      </td>
      <td>{company.name}</td>
      <td>{company.count}</td>
      <td>{company.address}</td>
    </tr>
  );
};
