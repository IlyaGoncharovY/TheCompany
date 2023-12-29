import {FC} from 'react';

import {CurrWorkerType} from '../../../common';

interface IWorkersItem {
  worker: CurrWorkerType
}

export const WorkersItem: FC<IWorkersItem> = ({worker}) => {
  return (
    <tr>
      <td>
        <input type="checkbox" checked={worker.isEdit}/>
      </td>
      <td>{worker.secondName}</td>
      <td>{worker.name}</td>
      <td>{worker.post}</td>
    </tr>
  );
};
