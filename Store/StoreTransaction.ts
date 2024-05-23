import {create} from 'zustand';
import {TransactionTypes} from './Models/TransactionTypes';

interface StateType {
  transactions: TransactionTypes[];
  create_Transaction: (item: TransactionTypes) => void;
}

let expenseData: TransactionTypes[] = [
  {
    title: 'Food',
    paymentType: 'card',
    date: 'Friday, 12 May',
    icon: 'food-turkey',
    description: '',
    image: '',
    totalAmount: 300,
  },
  {
    title: 'Transportation',
    paymentType: 'cash',
    date: 'Saturday, 13 May',
    icon: 'car-side',
    description: '',
    image: '',
    totalAmount: 150,
  },
  {
    title: 'Entertainment',
    paymentType: 'card',
    date: 'Sunday, 14 May',
    icon: 'movie-open',
    description: '',
    image: '',
    totalAmount: 200,
  },
  {
    title: 'Shopping',
    paymentType: 'card',
    date: 'Monday, 15 May',
    icon: 'shopping',
    description: '',
    image: '',
    totalAmount: 400,
  },
  {
    title: 'Utilities',
    paymentType: 'cash',
    date: 'Tuesday, 16 May',
    icon: 'van-utility',
    description: '',
    image: '',
    totalAmount: 250,
  },
  {
    title: 'Rent',
    paymentType: 'card',
    date: 'Wednesday, 17 May',
    icon: 'home-city',
    description: '',
    image: '',
    totalAmount: 1000,
  },
  {
    title: 'Groceries',
    paymentType: 'card',
    date: 'Thursday, 18 May',
    icon: 'cart',
    description: '',
    image: '',
    totalAmount: 500,
  },
  {
    title: 'Healthcare',
    paymentType: 'cash',
    date: 'Friday, 19 May',
    icon: 'cards-heart',
    description: '',
    image: '',
    totalAmount: 350,
  },
  {
    title: 'Education',
    paymentType: 'card',
    date: 'Saturday, 20 May',
    icon: 'book-open-variant',
    description: '',
    image: '',
    totalAmount: 600,
  },
  {
    title: 'Travel',
    paymentType: 'card',
    date: 'Sunday, 21 May',
    icon: 'motorbike',
    description: '',
    image: '',
    totalAmount: 700,
  },
];
const StoreTransaction = create<StateType>(set => ({
  transactions: expenseData,

  // create new transaction
  create_Transaction: (newItem: TransactionTypes) => {
    set(state => ({transactions: [...state?.transactions, newItem]}));
  },
}));

export default StoreTransaction;
