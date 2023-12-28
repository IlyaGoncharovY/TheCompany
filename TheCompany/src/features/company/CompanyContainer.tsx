export const CompanyContainer = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" /> Выделить все
          </th>
          <th>Название компании</th>
          <th>Кол-во сотрудников</th>
          <th>Аддрес</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>yandex</td>
          <td>999</td>
          <td>street pushkina</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>google</td>
          <td>888</td>
          <td>dom kalatushkina</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>mail</td>
          <td>777</td>
          <td>dom zasharovny</td>
        </tr>
      </tbody>
    </table>
  );
};
