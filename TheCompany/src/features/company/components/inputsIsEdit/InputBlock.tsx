import {FC} from 'react';

import {UniversalInput} from '../../../../common';
import {InitialCompanyTypes} from '../../reducer/CompanyReducer.ts';

interface IInputBlock {
  isEditing: boolean
  editedName: string
  setEditedName: (e: string) => void
  onKeyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
  company: InitialCompanyTypes
  editedAddress: string
  setEditedAddress: (e: string) => void
}

export const InputBlock: FC<IInputBlock> = ({
  isEditing,
  editedName,
  setEditedName,
  onKeyDownHandler,
  company,
  editedAddress,
  setEditedAddress,
}) => {
  return (
    <>
      <td>
        {isEditing ? (
          <UniversalInput
            type={'text'}
            value={editedName}
            onChangeEdit={(e) => setEditedName(e.currentTarget.value)}
            onKeyDown={onKeyDownHandler}
          />
        ) : (
          company.name
        )}
      </td>
      <td>
        {isEditing ? (
          <UniversalInput
            type={'text'}
            value={editedAddress}
            onChangeEdit={(e) => setEditedAddress(e.currentTarget.value)}
            onKeyDown={onKeyDownHandler}
          />
        ) : (
          company.address
        )}
      </td>
    </>
  );
};
