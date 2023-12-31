import {FC, memo, useState} from 'react';

import {useAppSelector} from '../../../store';
import {InitialCompanyTypes} from '../reducer/CompanyReducer.ts';

import {UniversalInput} from '../../../common';

import {UseCompanyHook} from '../helpers/UseCompanyHook.ts';

import {InputBlock} from '../components';

import s from './CompanyItem.module.scss';


interface ICompaniesItem {
  company: InitialCompanyTypes;
}

export const CompaniesItem: FC<ICompaniesItem> = memo(({company}) => {

  const workers = useAppSelector(state => state.workers.workers);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedName, setEditedName] = useState<string>(company.name);
  const [editedAddress, setEditedAddress] = useState<string>(company.address);

  const workersCount = workers[company.id]?.length || 0;

  const {
    onDoubleClickHandler,
    onChangeCheckHandler,
    onKeyDownHandler,
  } = UseCompanyHook(company, setIsEditing, editedName, editedAddress);

  return (
    <tr
      className={company.isChecked ? s.editCompany : ''}
      onDoubleClick={onDoubleClickHandler}
    >
      <td>
        <UniversalInput
          type={'checkbox'}
          isChecked={company.isChecked}
          onChange={onChangeCheckHandler}
        />
      </td>
      <InputBlock
        isEditing={isEditing}
        editedName={editedName}
        setEditedName={setEditedName}
        onKeyDownHandler={onKeyDownHandler}
        company={company}
        editedAddress={editedAddress}
        setEditedAddress={setEditedAddress}
      />
      <td>{workersCount}</td>
    </tr>
  );
});
