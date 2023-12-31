import {ChangeEvent, FC} from 'react';

interface IUniversalInput {
  type: string;
  value?: string;
  isChecked?: boolean;
  onChange?: () => void;
  onChangeEdit?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const UniversalInput: FC<IUniversalInput> = ({
  type,
  isChecked,
  onChange,
  onChangeEdit,
  value,
  onKeyDown,
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        checked={isChecked}
        onChange={onChange || onChangeEdit}
        onKeyDown={onKeyDown}
      />
    </>
  );
};
