import {v1} from 'uuid';

const companyId1 = v1();
const companyId2 = v1();
const companyId3 = v1();

export type CurrWorkersType = {
  id: string
  companyId: string
  isChecked: boolean
  secondName: string
  name: string
  post: string
}

export type InitialWorkersType = {[key: string]: CurrWorkersType[]}

export const workers: InitialWorkersType = {
  [companyId1] : [
    {id: v1(), companyId: companyId1, isChecked: false, secondName:'secondName1.1', name: 'name1.1', post:'post1.1'},
    {id: v1(), companyId: companyId1, isChecked: false, secondName:'secondName1.2', name: 'name1.2', post:'post1.2'},
    {id: v1(), companyId: companyId1, isChecked: false, secondName:'secondName1.3', name: 'name1.3', post:'post1.3'},
  ],
  [companyId2] : [
    {id: v1(), companyId: companyId2, isChecked: false, secondName:'secondName2.1', name: 'name2.1', post:'post2.1'},
    {id: v1(), companyId: companyId2, isChecked: false, secondName:'secondName2.2', name: 'name2.2', post:'post2.2'},
    {id: v1(), companyId: companyId2, isChecked: false, secondName:'secondName2.3', name: 'name2.3', post:'post2.3'},
    {id: v1(), companyId: companyId2, isChecked: false, secondName:'secondName2.4', name: 'name2.4', post:'post2.4'},
  ],
  [companyId3]: [
    {id: v1(), companyId: companyId3, isChecked: false, secondName:'secondName3.1', name: 'name3.1', post:'post3.1'},
    {id: v1(), companyId: companyId3, isChecked: false, secondName:'secondName3.2', name: 'name3.2', post:'post3.2'},
    {id: v1(), companyId: companyId3, isChecked: false, secondName:'secondName3.3', name: 'name3.3', post:'post3.3'},
    {id: v1(), companyId: companyId3, isChecked: false, secondName:'secondName3.4', name: 'name3.4', post:'post3.4'},
    {id: v1(), companyId: companyId3, isChecked: false, secondName:'secondName3.5', name: 'name3.5', post:'post3.5'},
  ],
};

export type InitialCompanyTypes = {
  id: string,
  isChecked: boolean
  name: string
  count: number
  address: string
}
export const companies: InitialCompanyTypes[] = [
  {id: companyId1, isChecked: false, name: 'companyId1',
    count: workers[companyId1].length, address: 'companyId1street'},
  {id: companyId2, isChecked: false, name: 'companyId2',
    count: workers[companyId2].length, address: 'companyId2street'},
  {id: companyId3, isChecked: false, name: 'companyId3',
    count: workers[companyId3].length, address: 'companyId3street'},
];

