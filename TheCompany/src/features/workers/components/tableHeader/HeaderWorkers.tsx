import {workersTableHeader} from '../../../../common/dataSet.ts';

export const HeaderWorkers = () => {
  return (

    <thead>
      <tr>
        <th>
          <input type="checkbox" /> Выделить все
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
