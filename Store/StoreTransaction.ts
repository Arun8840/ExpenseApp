import {create} from 'zustand';
import {TransactionTypes} from './Models/TransactionTypes';

interface StateType {
  transactions: TransactionTypes[];
}

let expenseData: TransactionTypes[] = [
  {
    title: 'Food',
    paymentType: 'card',
    date: 'Friday, 12 May',
    icon: 'food-turkey',
    totalAmount: 300,
  },
  {
    title: 'Transportation',
    paymentType: 'cash',
    date: 'Saturday, 13 May',
    icon: 'car-side',
    totalAmount: 150,
  },
  {
    title: 'Entertainment',
    paymentType: 'card',
    date: 'Sunday, 14 May',
    icon: 'movie-open',
    totalAmount: 200,
  },
  {
    title: 'Shopping',
    paymentType: 'card',
    date: 'Monday, 15 May',
    icon: 'shopping',
    totalAmount: 400,
  },
  {
    title: 'Utilities',
    paymentType: 'cash',
    date: 'Tuesday, 16 May',
    icon: 'van-utility',
    totalAmount: 250,
  },
  {
    title: 'Rent',
    paymentType: 'card',
    date: 'Wednesday, 17 May',
    icon: 'home-city',
    totalAmount: 1000,
  },
  {
    title: 'Groceries',
    paymentType: 'card',
    date: 'Thursday, 18 May',
    icon: 'cart',
    totalAmount: 500,
  },
  {
    title: 'Healthcare',
    paymentType: 'cash',
    date: 'Friday, 19 May',
    icon: 'cards-heart',
    totalAmount: 350,
  },
  {
    title: 'Education',
    paymentType: 'card',
    date: 'Saturday, 20 May',
    icon: 'book-open-variant',
    totalAmount: 600,
  },
  {
    title: 'Travel',
    paymentType: 'card',
    date: 'Sunday, 21 May',
    icon: 'motorbike',
    totalAmount: 700,
  },
];
const useStore = create<StateType>(set => ({
  transactions: expenseData,
}));

export default useStore;
