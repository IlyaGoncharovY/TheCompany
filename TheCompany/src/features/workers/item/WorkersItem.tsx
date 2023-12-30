import {FC, useState} from 'react';

import {useAppDispatch} from '../../../store';
import {CurrWorkersType} from '../../../common';
import {changeWorkerStatus, editWorkerBody} from '../reducer/WorkersReducer.ts';

import s from './WorkersItem.module.scss';

interface IWorkersItem {
  worker: CurrWorkersType;
}
export const WorkersItem: FC<IWorkersItem> = ({worker}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedSecondName, setEditedSecondName] = useState(worker.secondName);
  const [editedName, setEditedName] = useState(worker.name);
  const [editedPost, setEditedPost] = useState(worker.post);

  const dispatch = useAppDispatch();

  const onClickCheckHandler = (workerId: string) => dispatch(changeWorkerStatus(workerId));

  const onDoubleClickHandler = () => {
    setIsEditing(true);
  };

  const onSaveHandler = () => {
    dispatch(
      editWorkerBody({
        companyId: worker.companyId,
        workerId: worker.id,
        editedSecondName,
        editedName,
        editedPost,
      }),
    );
    setIsEditing(false);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSaveHandler();
    }
  };
  console.log(worker);
  return (
    <tr
      className={`${worker.isChecked ? s.editWorker : ''}`}
      onDoubleClick={onDoubleClickHandler}
    >
      <td>
        <input
          type="checkbox"
          checked={worker.isChecked}
          onClick={() => onClickCheckHandler(worker.id)}
        />
      </td>
      {/*<td>{worker.secondName}</td>*/}
      {/*<td>{worker.name}</td>*/}
      {/*<td>{worker.post}</td>*/}
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedSecondName}
            onChange={(e) => setEditedSecondName(e.target.value)}
            onKeyDown={onKeyDownHandler}
          />
        ) : (
          worker.secondName
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            onKeyDown={onKeyDownHandler}
          />
        ) : (
          worker.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedPost}
            onChange={(e) => setEditedPost(e.target.value)}
            onKeyDown={onKeyDownHandler}
          />
        ) : (
          worker.post
        )}
      </td>
    </tr>
  );
};
