import {workersTableHeader} from '../../../../common/dataSet.ts';

export const HeaderWorkers = () => {
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
