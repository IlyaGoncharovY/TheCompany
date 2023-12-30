import {ChangeEvent, FC} from 'react';

import {InitialCompanyTypes} from '../../../../common';
import {useAppDispatch} from '../../../../store/hook.ts';
import {workersTableHeader} from '../../../../common/dataSet.ts';
import {changeWorkerAllStatus} from '../../reducer/WorkersReducer.ts';

interface IHeaderWorkers {
  companies: InitialCompanyTypes[]
}

export const HeaderWorkers: FC<IHeaderWorkers> = ({companies}) => {

  const dispatch = useAppDispatch();

  const disabledCheck = companies.some((c) => c.isChecked);

  const checkOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    const companyIds = companies.filter((c) => c.isChecked).map((c) => c.id);
    dispatch(changeWorkerAllStatus({isChecked, companyIds}));
  };
  return (
    <thead>
      <tr>
        <th>
        Сотрудники
        </th>
        <th>
          <button>Добавить сотрудника</button>
        </th>
        <th>
          <button>Удалить сотрудника</button>
        </th>
      </tr>
      <tr>
        <th>
          <input
            type="checkbox"
            onChange={checkOnChangeHandler}
            disabled={!disabledCheck}
          /> Выделить все
        </th>
        {workersTableHeader.map((el) =>
          <th key={el.id}>
            {el.title}
          </th>,
        )}
      </tr>
    </thead>
  );
};
