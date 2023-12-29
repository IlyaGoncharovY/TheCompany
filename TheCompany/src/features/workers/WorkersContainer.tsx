import {useAppSelector} from '../../store/hook.ts';

import {HeaderWorkers} from './components/tableHeader/HeaderWorkers.tsx';
import {WorkersItem} from './item/WorkersItem.tsx';

export const WorkersContainer = () => {

  const workers = useAppSelector(state => state.workers.workers);
  const allWorkers = Object.values(workers).flat();
  return (
    <table>
      <HeaderWorkers/>
      <tbody>
        {allWorkers.map((worker) =>
          <WorkersItem key={worker.id} worker={worker}/>,
        )}
      </tbody>
    </table>
  );
};
