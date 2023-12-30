import {FC} from 'react';

import {CurrWorkersType} from '../../../common';

interface IWorkersItem {
  worker: CurrWorkersType;
}
export const WorkersItem: FC<IWorkersItem> = ({worker}) => {

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={worker.isChecked}
          onClick={() => {}}
        />
      </td>
      <td>{worker.secondName}</td>
      <td>{worker.name}</td>
      <td>{worker.post}</td>
    </tr>
  );
};
