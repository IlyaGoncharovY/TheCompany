import {useAppSelector} from '../../store';

import {CommonContainer} from '../../common';

import {CompaniesItem} from './item/CompaniesItem.tsx';
import {HeaderCompany} from './components';


export const CompanyContainer = () => {

  const companies = useAppSelector(state => state.company.companies);

  return (
    <CommonContainer
      headerComponent={<HeaderCompany companies={companies} />}
      renderItem={(company) => <CompaniesItem key={company.id} company={company} />}
      items={companies}
    />
  );
};
