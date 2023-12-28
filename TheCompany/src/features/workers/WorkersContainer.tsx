export const WorkersContainer = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" /> Выделить всё
          </th>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Должность</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Бобов</td>
          <td>Боб</td>
          <td>Рабочий</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Иванов</td>
          <td>Иван</td>
          <td>рабочий 2</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Сергеев</td>
          <td>Сергей</td>
          <td>рабочий 3</td>
        </tr>
      </tbody>
    </table>
  );
};
