import { IQuery } from './../../../../commons/types/generated/types';
import { ChangeEvent } from 'react';

export interface IProductWriteProps {
  isEdit?: boolean;
  data?: Pick<IQuery, 'fetchProduct'>;
}

export interface IProductWriteUIProps {
  handleChangeSeller: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeProductName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeProductDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeProductPrice: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickSubmit: () => void;
  handleClickUpdate: () => void;
  isEdit?: boolean;
  data?: Pick<IQuery, 'fetchProduct'>;
}

export interface IMyVariables {
  productId: string | string[] | undefined;
  updateProductInput: {
    name?: string;
    detail?: string;
    price?: number;
  };
}
