import {useAppSelector} from '../../store/hook.ts';

import {InitialCompanyTypes} from '../../common';

import {WorkersItem} from './item/WorkersItem.tsx';
import {HeaderWorkers} from './components/tableHeader/HeaderWorkers.tsx';

export const WorkersContainer = () => {

  const companies = useAppSelector(state => state.company.companies);
  const workers = useAppSelector((state) => state.workers.workers);
  const allWorkers = Object.values(workers).flat();

  return (
    <table>
      <HeaderWorkers companies={companies}/>
      <tbody>
        {allWorkers.map((worker) => {
          const company = companies.find((c) => c.id === worker.companyId) as InitialCompanyTypes;
          if (company.isChecked) {
            return <WorkersItem key={worker.id} worker={worker} />;
          }
          return null;
        })}
      </tbody>
    </table>
  );
};
