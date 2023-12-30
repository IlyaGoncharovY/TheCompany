import {FC, useState} from 'react';

import {InitialCompanyTypes} from '../../../common';

import {useAppDispatch, useAppSelector} from '../../../store';
import {changeStatusCompany, editCompanyBody} from '../reducer/CompanyReducer.ts';

import s from './CompanyItem.module.scss';

interface ICompaniesItem {
  company: InitialCompanyTypes
}

export const CompaniesItem: FC<ICompaniesItem> = ({company}) => {

  const workers = useAppSelector(state => state.workers.workers);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedName, setEditedName] = useState<string>(company.name);
  const [editedAddress, setEditedAddress] = useState<string>(company.address);

  const workersCount = workers[company.id]?.length || 0;

  const dispatch = useAppDispatch();
  const onClickCheckHandler = (companyId: string) => dispatch(changeStatusCompany(companyId));

  const onDoubleClickHandler = () => {
    setIsEditing(true);
  };

  const onSaveHandler = () => {
    dispatch(editCompanyBody({ companyId: company.id, editedName, editedAddress }));
    setIsEditing(false);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSaveHandler();
    }
  };

  console.log(company);
  return (
    <tr
      className={`${company.isChecked ? s.editCompany : ''}`}
      onDoubleClick={onDoubleClickHandler}
    >
      <td>
        <input
          type="checkbox"
          checked={company.isChecked}
          onClick={() => onClickCheckHandler(company.id)}
        />
      </td>
      {/*<td>{company.name}</td>*/}
      {/*<td>{company.address}</td>*/}
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            onKeyDown={onKeyDownHandler}
          />
        ) : (
          company.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedAddress}
            onChange={(e) => setEditedAddress(e.target.value)}
            onKeyDown={onKeyDownHandler}
          />
        ) : (
          company.address
        )}
      </td>
      <td>{workersCount}</td>
    </tr>
  );
};
