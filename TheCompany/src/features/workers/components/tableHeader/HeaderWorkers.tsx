import {ChangeEvent, FC, useCallback} from 'react';

import {v1} from 'uuid';

import {useAppDispatch} from '../../../../store';
import {workersTableHeader} from '../../../../common';
import {InitialCompanyTypes} from '../../../company/reducer/CompanyReducer.ts';
import {addNewWorker, changeWorkerAllStatus, CurrWorkersType, deleteWorker} from '../../reducer/WorkersReducer.ts';

interface IHeaderWorkers {
  companies: InitialCompanyTypes[]
}

export type WorkerType = {[key: string]: CurrWorkersType}

export const HeaderWorkers: FC<IHeaderWorkers> = ({companies}) => {

  const dispatch = useAppDispatch();

  const disabledCheck = companies.some((c) => c.isChecked);

  const selectedCompanies = companies.filter((c) => c.isChecked);
  const disabledAddWorker = selectedCompanies.length !== 1;

  const checkOnChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    const companyIds = companies.filter((c) => c.isChecked).map((c) => c.id);
    dispatch(changeWorkerAllStatus({isChecked, companyIds}));
  },[dispatch, companies]);

  const addNewWorkerHandler = useCallback(() => {
    const selectedCompany = companies.find((c) => c.isChecked);

    if (selectedCompany) {
      const newWorker: WorkerType = {
        [selectedCompany.id]: {
          id: v1(),
          companyId: selectedCompany.id,
          isChecked: false,
          secondName: 'secondName1.1',
          name: 'name1.1',
          post: 'post1.1',
        },
      };

      dispatch(addNewWorker(newWorker));
    }
  }, [companies, dispatch]);

  const deleteWorkerHandler = useCallback(() => {
    dispatch(deleteWorker());
  }, [dispatch]);

  return (
    <thead>
      <tr>
        <th>
        Сотрудники
        </th>
        <th>
          <button
            onClick={addNewWorkerHandler}
            disabled={!disabledCheck || disabledAddWorker}
          >
            Добавить сотрудника
          </button>
        </th>
        <th>
          <button
            onClick={deleteWorkerHandler}
          >
            Удалить сотрудника
          </button>
        </th>
        <th></th>
      </tr>
      <tr>
        <th>
          <input
            type="checkbox"
            onChange={checkOnChangeHandler}
            disabled={!disabledCheck || disabledAddWorker}
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
