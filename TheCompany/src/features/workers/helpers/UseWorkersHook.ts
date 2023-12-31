import {useAppDispatch} from '../../../store';
import {changeWorkerStatus, CurrWorkersType, editWorkerBody} from '../reducer/WorkersReducer.ts';

export const UseWorkersHook = (
  worker: CurrWorkersType,
  setIsEditing: (value: boolean) => void,
  editedSecondName: string,
  editedName: string,
  editedPost: string,
) => {

  const dispatch = useAppDispatch();

  const onChangeCheckHandler = () => {
    dispatch(changeWorkerStatus(worker.id));
  };

  const onDoubleClickHandler = () => {
    setIsEditing(true);
  };

  const onSaveHandler = () => {
    dispatch(
      editWorkerBody({
        companyId: worker.companyId,
        workerId: worker.id,
        editedSecondName,
        editedName,
        editedPost,
      }),
    );
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
