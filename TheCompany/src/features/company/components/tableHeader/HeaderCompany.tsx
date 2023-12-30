import {ChangeEvent} from 'react';

import {companyTableHeader} from '../../../../common/dataSet.ts';
import {useAppDispatch} from '../../../../store/hook.ts';
import {changeStatusAllCompany} from '../../reducer/CompanyReducer.ts';

export const HeaderCompany = () => {

  const dispatch = useAppDispatch();

  const checkOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    dispatch(changeStatusAllCompany(isChecked));
  };

  return (
    <thead>
      <tr>
        <th>
        Компании
        </th>
        <th>
          <button>Добавить компанию</button>
        </th>
        <th>
          <button>Удалить компанию</button>
        </th>
      </tr>
      <tr>
        <th>
          <input
            type="checkbox"
            onChange={checkOnChangeHandler}
          /> Выделить все
        </th>
        {companyTableHeader.map((el) =>
          <th key={el.id}>
            {el.title}
          </th>,
        )}
      </tr>
    </thead>
  );
};
