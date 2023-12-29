import {companyTableHeader} from '../../../../common/dataSet.ts';

export const HeaderCompany = () => {
  return (

    <thead>
      <tr>
        <th>
          <input type="checkbox"/> Выделить все
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
