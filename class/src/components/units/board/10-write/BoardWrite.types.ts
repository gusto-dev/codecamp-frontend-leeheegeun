import { IQuery } from './../../../../commons/types/generated/types';
import { ChangeEvent } from 'react';

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
}

export interface IBoardWriteUIProps {
  handleClickSubmit: () => void;
  handleClickUpdate: () => void;
  handleChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  myColor: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, 'fetchBoard'>;
}

export interface ISubmitButtonProps {
  qqq: string;
  aaa: boolean;
}

export interface IMyvariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}
