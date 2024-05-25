import {create} from 'zustand';
import {TransactionTypes} from './Models/TransactionTypes';

interface StateType {
  transactions: TransactionTypes[];
  create_Transaction: (item: TransactionTypes) => void;
  delete_Transaction: (item: TransactionTypes) => void;
}

let expenseData: TransactionTypes[] = [
  {
    id: 1,
    title: 'Food',
    paymentType: 'card',
    date: 'Friday, 12 May',
    icon: 'food-turkey',
    description: '',
    image: '',
    totalAmount: 300,
  },
  {
    id: 2,
    title: 'Transportation',
    paymentType: 'cash',
    date: 'Saturday, 13 May',
    icon: 'car-side',
    description: '',
    image: '',
    totalAmount: 150,
  },
  {
    id: 3,
    title: 'Entertainment',
    paymentType: 'card',
    date: 'Sunday, 14 May',
    icon: 'movie-open',
    description: '',
    image: '',
    totalAmount: 200,
  },
  {
    id: 4,
    title: 'Shopping',
    paymentType: 'card',
    date: 'Monday, 15 May',
    icon: 'shopping',
    description: '',
    image: '',
    totalAmount: 400,
  },
  {
    id: 5,
    title: 'Utilities',
    paymentType: 'cash',
    date: 'Tuesday, 16 May',
    icon: 'van-utility',
    description: '',
    image: '',
    totalAmount: 250,
  },
];
const StoreTransaction = create<StateType>(set => ({
  transactions: expenseData,

  // create new transaction
  create_Transaction: (newItem: TransactionTypes) => {
    set(state => ({transactions: [...state?.transactions, newItem]}));
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
