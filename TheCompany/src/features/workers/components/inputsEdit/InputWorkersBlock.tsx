import {FC} from 'react';

import {UniversalInput} from '../../../../common';
import {CurrWorkersType} from '../../reducer/WorkersReducer.ts';

interface IInputWorkersBlock {
  isEditing: boolean;
  editedSecondName: string;
  editedName: string;
  editedPost: string;
  setEditedSecondName: (value: string) => void;
  setEditedName: (value: string) => void;
  setEditedPost: (value: string) => void;
  onKeyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
  worker: CurrWorkersType;

}

export const InputWorkersBlock: FC<IInputWorkersBlock> = ({
  isEditing,
  editedSecondName,
  editedName,
  editedPost,
  setEditedSecondName,
  setEditedName,
  setEditedPost,
  onKeyDownHandler,
  worker,
}) => {
  return (
    <>
      <td>
        {isEditing ? (
          <UniversalInput
            type={'text'}
            value={editedSecondName}
            onChangeEdit={(e) => setEditedSecondName(e.target.value)}
            onKeyDown={onKeyDownHandler}
          />
        ) : (
          worker.secondName
        )}
      </td>
      <td>
        {isEditing ? (
          <UniversalInput
            type={'text'}
            value={editedName}
            onChangeEdit={(e) => setEditedName(e.currentTarget.value)}
            onKeyDown={onKeyDownHandler}
          />
        ) : (
          worker.name
        )}
      </td>
      <td>
        {isEditing ? (
          <UniversalInput
            type={'text'}
            value={editedPost}
            onChangeEdit={(e) => setEditedPost(e.currentTarget.value)}
            onKeyDown={onKeyDownHandler}
          />
        ) : (
          worker.post
        )}
      </td>
    </>
  );
};
