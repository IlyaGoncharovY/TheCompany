import {FC, memo, useState} from 'react';

import {CurrWorkersType} from '../reducer/WorkersReducer.ts';

import {UniversalInput} from '../../../common';

import {UseWorkersHook} from '../helpers/UseWorkersHook.ts';

import {InputWorkersBlock} from '../components';

import s from './WorkersItem.module.scss';

interface IWorkersItem {
  worker: CurrWorkersType;
}
export const WorkersItem: FC<IWorkersItem> = memo(({worker}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedSecondName, setEditedSecondName] = useState(worker.secondName);
  const [editedName, setEditedName] = useState(worker.name);
  const [editedPost, setEditedPost] = useState(worker.post);

  const {
    onDoubleClickHandler,
    onKeyDownHandler,
    onChangeCheckHandler,
  } = UseWorkersHook(worker, setIsEditing, editedSecondName, editedName, editedPost);

  return (
    <tr
      className={`${worker.isChecked ? s.editWorker : ''}`}
      onDoubleClick={onDoubleClickHandler}
    >
      <td>
        <UniversalInput
          type={'checkbox'}
          isChecked={worker.isChecked}
          onChange={onChangeCheckHandler}
        />
      </td>
      <InputWorkersBlock
        isEditing={isEditing}
        editedSecondName={editedSecondName}
        editedName={editedName}
        editedPost={editedPost}
        setEditedSecondName={setEditedSecondName}
        setEditedName={setEditedName}
        setEditedPost={setEditedPost}
        onKeyDownHandler={onKeyDownHandler}
        worker={worker}/>
    </tr>
  );
});
