import {FC} from 'react';

import {tableHeaderType} from '../../../index.ts';

interface IHeaderItem {
  tableElement:  tableHeaderType
}
export const HeaderItem: FC<IHeaderItem> = ({tableElement}) => {
  return (
    <th>
      {tableElement.title}
    </th>
  );
};
