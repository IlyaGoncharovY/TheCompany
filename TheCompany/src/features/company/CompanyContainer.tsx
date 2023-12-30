import {useAppSelector} from '../../store';

import {CompaniesItem} from './item/CompaniesItem.tsx';
import {HeaderCompany} from './components/tableHeader/HeaderCompany.tsx';

export const CompanyContainer = () => {

  const companies = useAppSelector(state => state.company.companies);

  return (
    <table>
      <HeaderCompany companies={companies}/>
      <tbody>
        {companies.map((company)=>
          <CompaniesItem key={company.id} company={company}/>,
        )}
      </tbody>
    </table>
  );
};
