import {useAppDispatch} from '../../../store';
import {changeStatusCompany, editCompanyBody, InitialCompanyTypes} from '../reducer/CompanyReducer.ts';

/**
 * custom hook for @companies
 * @param company
 * @param setIsEditing
 * @param editedName
 * @param editedAddress
 * @constructor
 * @return onDoubleClickHandler
 * @return onChangeCheckHandler
 * @return onKeyDownHandler
 */

export const UseCompanyHook = (
  company: InitialCompanyTypes,
  setIsEditing: (value: boolean) => void,
  editedName: string,
  editedAddress: string,
) => {

  const dispatch = useAppDispatch();

  const onChangeCheckHandler = () => {
    dispatch(changeStatusCompany(company.id));
  };

  const onDoubleClickHandler = () => {
    setIsEditing(true);
  };

  const onSaveHandler = () => {
    dispatch(editCompanyBody({companyId: company.id, editedName, editedAddress}));
    setIsEditing(false);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSaveHandler();
    }
  };

  return {
    onDoubleClickHandler,
    onChangeCheckHandler,
    onKeyDownHandler,
  };
};
