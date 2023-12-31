export type tableHeaderType = {
    id: number,
    title: string
}

export const companyTableHeader: tableHeaderType[] = [
  {id: 1, title: 'Название компании:'},
  {id: 2, title: 'Аддрес:'},
  {id: 3, title: 'Кол-во сотрудников:'},
];

export const workersTableHeader: tableHeaderType[] = [
  {id: 1, title: 'Фамилия:'},
  {id: 2, title: 'Имя:'},
  {id: 3, title: 'Должность:'},
];
