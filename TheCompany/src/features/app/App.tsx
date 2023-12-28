import {CompanyContainer} from '../company';
import {WorkersContainer} from '../workers';

import s from './App.module.scss';

export const App = () => {

  return (
    <div className={s.appContainer}>
      <CompanyContainer/>
      <WorkersContainer/>
    </div>
  );
};
