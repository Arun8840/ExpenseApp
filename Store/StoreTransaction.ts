import {create, useStore} from 'zustand';
import {CategoryTypes, TransactionTypes} from './Models/TransactionTypes';
import Categorys from '../data/CategoryData.json';

interface StateType {
  transactions: TransactionTypes[];
  CategoryData: CategoryTypes[];
  create_Transaction: (item: TransactionTypes) => void;
  delete_Transaction: (item: TransactionTypes) => void;
}

const StoreTransaction = create<StateType>((set, get) => ({
  transactions: [],
  CategoryData: Categorys,
  // create new transaction
  create_Transaction: (newItem: TransactionTypes) => {
    set(state => ({transactions: [...state?.transactions, newItem]}));
    set(state => ({
      CategoryData: state?.CategoryData?.map(oldValue => {
        if (oldValue?.name === newItem?.expenseCategory) {
          return {
            ...oldValue,
            useage: (oldValue.useage ?? 0) + 1,
            totalAmount: [...oldValue?.totalAmount, newItem?.totalAmount],
          };
        }
        return oldValue;
      }),
    }));
  },
  // !delete transaction
  delete_Transaction: (deleteItem: TransactionTypes) => {
    set(state => ({
      transactions: state?.transactions?.filter(
        existItem => existItem?.id !== deleteItem?.id,
      ),
    }));
    return true;
  },
}));

export default StoreTransaction;
