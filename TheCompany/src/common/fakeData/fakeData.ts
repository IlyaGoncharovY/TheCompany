import {v1} from 'uuid';

export type CurrWorkerType = {
  id: string;
  secondName: string;
  name: string;
  post: string;
  isEdit: boolean;
}

export type WorkerType = {
  [companyId: string]: CurrWorkerType[]
};

export type CompanyType = {
  id: string;
  name: string;
  count: number;
  address: string;
  isEdit: boolean
};

const generateWorker = (): { id: string; secondName: string; name: string; post: string; isEdit: boolean } => ({
  id: v1(),
  secondName: 'FakeSecondName1',
  name: 'FakeName',
  post: 'FakePost',
  isEdit: false,
});

const generateCompany = (id: string, name: string, address: string, numWorkers: number, isEdit: boolean): CompanyType => {
  const workers = Array.from({length: numWorkers}, () => generateWorker());
  return {
    id,
    name,
    count: workers.length,
    address,
    isEdit,
  };
};

const companyId1 = v1();
const companyId2 = v1();

export const workers: WorkerType = {
  [companyId1]: [generateWorker(), generateWorker(), generateWorker()],
  [companyId2]: [generateWorker(), generateWorker()],
};

export const companies: CompanyType[] = [
  generateCompany(companyId1, 'company1', 'company1 address', workers[companyId1].length, false),
  generateCompany(companyId2, 'company2', 'company2 address', workers[companyId2].length, false),
];
