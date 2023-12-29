import {v1} from 'uuid';

export type WorkerType = { [companyId: string]: { id: string; secondName: string; name: string; post: string }[] };

export type CompanyType = {
  id: string;
  name: string;
  count: number;
  address: string;
};

const generateWorker = (): { id: string; secondName: string; name: string; post: string } => ({
  id: v1(),
  secondName: 'FakeSecondName',
  name: 'FakeName',
  post: 'FakePost',
});

const generateCompany = (id: string, name: string, address: string, numWorkers: number): CompanyType => {
  const workers = Array.from({ length: numWorkers }, () => generateWorker());
  return {
    id,
    name,
    count: workers.length,
    address,
  };
};

const companyId1 = v1();
const companyId2 = v1();

export const workers: WorkerType = {
  [companyId1]: [generateWorker(), generateWorker(), generateWorker()],
  [companyId2]: [generateWorker(), generateWorker()],
};

export const companies: CompanyType[] = [
  generateCompany(companyId1, 'company1', 'company1 address', workers[companyId1].length),
  generateCompany(companyId2, 'company2', 'company2 address', workers[companyId2].length),
];

// For testing
console.log(workers);
console.log(companies);
