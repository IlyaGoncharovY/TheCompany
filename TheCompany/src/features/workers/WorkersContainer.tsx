import {useAppSelector} from '../../store';

import {WorkersItem} from './item/WorkersItem.tsx';
import {HeaderWorkers} from './components/tableHeader/HeaderWorkers.tsx';

export const WorkersContainer = () => {

  const companies = useAppSelector(state => state.company.companies);
  const workers = useAppSelector((state) => state.workers.workers);

  const filteredWorkers = companies
    .filter((company) => company.isChecked)
    .flatMap((company) => workers[company.id] || []);
  console.log(workers);
  return (
    <table>
      <HeaderWorkers companies={companies}/>
      <tbody>
        {/*{filteredWorkers.map((worker) => {*/}
        {/*  const company = companies.find((c) => c.id === worker.companyId) as InitialCompanyTypes;*/}
        {/*  if (company.isChecked) {*/}
        {/*    return <WorkersItem key={worker.id} worker={worker} />;*/}
        {/*  }*/}
        {/*  return null;*/}
        {/*})}*/}
        {filteredWorkers.map((worker) => (
          <WorkersItem key={worker.id} worker={worker} />
        ))}
      </tbody>
    </table>
  );
};
