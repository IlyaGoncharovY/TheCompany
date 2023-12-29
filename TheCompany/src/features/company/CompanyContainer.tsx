import {HeaderCompany} from './components/tableHeader/HeaderCompany.tsx';

export const CompanyContainer = () => {

  return (
    <table>
      <HeaderCompany/>
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
