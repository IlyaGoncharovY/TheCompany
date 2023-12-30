import {ChangeEvent, useState} from 'react';

import {companyTableHeader} from '../../../../common/dataSet.ts';

export const HeaderCompany = () => {

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
  };

  const changeStatusAllCompanyHandler = () => {

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
            checked={isChecked}
            onChange={checkOnChangeHandler}
            onClick={changeStatusAllCompanyHandler}
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
