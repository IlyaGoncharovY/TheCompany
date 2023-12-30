import {FC} from 'react';

import {CurrWorkersType} from '../../../common';
import {useAppDispatch} from '../../../store/hook.ts';
import {changeWorkerStatus} from '../reducer/WorkersReducer.ts';

import s from './WorkersItem.module.scss';

interface IWorkersItem {
  worker: CurrWorkersType;
}
export const WorkersItem: FC<IWorkersItem> = ({worker}) => {

  const dispatch = useAppDispatch();

  const onClickCheckHandler = (workerId: string) => dispatch(changeWorkerStatus(workerId));

  return (
    <tr className={`${worker.isChecked ? s.editWorker : ''}`}>
      <td>
        <input
          type="checkbox"
          checked={worker.isChecked}
          onClick={() => onClickCheckHandler(worker.id)}
        />
      </td>
      <td>{worker.secondName}</td>
      <td>{worker.name}</td>
      <td>{worker.post}</td>
    </tr>
  );
};
