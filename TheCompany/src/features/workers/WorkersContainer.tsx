import {useAppSelector} from '../../store';

import {CommonContainer} from '../../common';

import {WorkersItem} from './item/WorkersItem.tsx';
import {HeaderWorkers} from './components';

export const WorkersContainer = () => {

  const companies = useAppSelector(state => state.company.companies);
  const workers = useAppSelector((state) => state.workers.workers);

  const filteredWorkers = companies
    .filter((company) => company.isChecked)
    .flatMap((company) => workers[company.id] || []);

  return (
    <CommonContainer
      headerComponent={<HeaderWorkers companies={companies} />}
      renderItem={(worker) => <WorkersItem key={worker.id} worker={worker} />}
      items={filteredWorkers}
    />
  );
};
