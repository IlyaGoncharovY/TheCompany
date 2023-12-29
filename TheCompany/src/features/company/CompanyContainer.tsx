import {useAppSelector} from '../../store/hook.ts';

import {HeaderCompany} from './components/tableHeader/HeaderCompany.tsx';
import {CompaniesItem} from './item/CompaniesItem.tsx';

export const CompanyContainer = () => {

  const companies = useAppSelector(state => state.company.companies);

  return (
    <table>
      <HeaderCompany/>
      <tbody>
        {companies.map((company)=>
          <CompaniesItem key={company.id} company={company}/>,
        )}
      </tbody>
    </table>
  );
};
