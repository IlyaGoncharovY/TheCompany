import {ChangeEvent, FC, useCallback} from 'react';

import {tableHeaderType} from '../../dataSet.ts';

import {HeaderItem} from './item/HeaderItem.tsx';

interface ICommonHeader<T> {
  items: T[];
  checkOnChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  addNewItemHandler: () => void;
  deleteItemHandler: () => void;
  disabledCheck?: boolean;
  disabledAddItem?: boolean;
  itemName: string;
  dataForTable: tableHeaderType[]
}

/**
 * common component for header workers and companies
 * @param items
 * @param checkOnChangeHandler
 * @param addNewItemHandler
 * @param deleteItemHandler
 * @param disabledCheck
 * @param disabledAddItem
 * @param itemName
 * @param dataForTable
 * @constructor
 */
export const CommonHeader:FC<ICommonHeader<any>> = ({
  items,
  checkOnChangeHandler,
  addNewItemHandler,
  deleteItemHandler,
  disabledCheck,
  disabledAddItem,
  itemName,
  dataForTable,
}) => {

  const checkedItemIds = items.filter((item) =>
    item.isChecked).map((item) => item.id);

  const handleAddItem = useCallback(() => {
    addNewItemHandler();
  }, [addNewItemHandler]);

  const handleDeleteItem = useCallback(() => {
    deleteItemHandler();
  }, [deleteItemHandler]);

  return (
    <thead>
      <tr>
        <th>{itemName}</th>
        <th>
          <button onClick={handleAddItem} disabled={disabledCheck || disabledAddItem}>
          Добавить {itemName.toLowerCase()}
          </button>
        </th>
        <th>
          <button onClick={handleDeleteItem} disabled={checkedItemIds.length === 0}>
          Удалить {itemName.toLowerCase()}
          </button>
        </th>
        <th></th>
      </tr>
      <tr>
        <th>
          <input
            type="checkbox"
            onChange={checkOnChangeHandler}
            disabled={disabledCheck || disabledAddItem}
          />{' '}
        Выделить все
        </th>
        {dataForTable.map((el) => (
          <HeaderItem key={el.id} tableElement={el} />
        ))}
      </tr>
    </thead>
  );
};
