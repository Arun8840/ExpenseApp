import {create} from 'zustand';
import {
  CardTypes,
  CategoryTypes,
  TransactionTypes,
} from './Models/TransactionTypes';
import Categorys from '../data/CategoryData.json';
import CardDatas from '../data/CardData.json';
import {ThemeTypes} from '../Utility/Theme';
import AllThemeData from '../data/CustomThemeData.json';
interface StateType {
  transactions: TransactionTypes[];
  CategoryData: CategoryTypes[];
  CardData: CardTypes[];
  Theme: ThemeTypes;
  allTheme: any[];
  create_Transaction: (item: TransactionTypes) => void;
  create_Category: (item: CategoryTypes) => void;
  delete_Transaction: (item: TransactionTypes) => void;
  update_Transaction: (item: TransactionTypes) => void;
  update_Budget: (item: TransactionTypes) => void;
  set_Budget: (item: TransactionTypes) => void;
  enableCard: (items: CardTypes) => void;
  setTheme: (item: ThemeTypes) => void;
}

const StoreTransaction = create<StateType>((set, get) => ({
  transactions: [],
  CategoryData: Categorys,
  CardData: CardDatas,
  allTheme: AllThemeData,
  Theme: {} as ThemeTypes,
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
  update_Transaction: (newItem: TransactionTypes) => {
    let storeData = get();
    let updatedValue = storeData?.transactions?.map(oldValues => {
      if (oldValues?.id === newItem?.id) {
        return newItem;
      }
      return oldValues;
    });
    set(state => ({...state, transactions: updatedValue}));
  },

  create_Category: (newItem: CategoryTypes) => {
    set(state => ({CategoryData: [...state?.CategoryData, newItem]}));
  },
  // !delete transaction
  delete_Transaction: (deleteItem: TransactionTypes) => {
    set(state => ({
      transactions: state?.transactions?.filter(
        existItem => existItem?.id !== deleteItem?.id,
      ),
    }));
    set(state => ({
      CategoryData: state?.CategoryData?.map(oldValue => {
        if (oldValue?.name === deleteItem?.expenseCategory) {
          return {
            ...oldValue,
            useage: (oldValue.useage ?? 0) - 1,
            totalAmount: oldValue?.totalAmount?.filter(
              existAmount => existAmount !== deleteItem?.totalAmount,
            ),
          };
        }
        return oldValue;
      }),
    }));
    return true;
  },
  set_Budget: (budgetData: any) => {
    let storeData = get();
    let updated = storeData?.CategoryData?.map(category_items => {
      if (category_items?.id === budgetData?.id) {
        return {
          ...category_items,
          budget: {
            amount: budgetData?.budget?.amount,
            isBudgeted: budgetData?.budget?.isBudgeted,
          },
        };
      }
      return category_items;
    });
    set(state => ({...state, CategoryData: updated}));
  },
  update_Budget: (budgetData: any) => {},
  enableCard: (cardData: CardTypes) => {
    set((state: {CardData: CardTypes[]}) => ({
      ...state,
      CardData: state.CardData?.map(item =>
        item?.id === cardData?.id
          ? {...item, isSelected: !item?.isSelected}
          : {...item, isSelected: false},
      ),
    }));
  },

  // todo set theme
  setTheme: (data: ThemeTypes) => {
    let {primary, secondary, textPrimary, textSecondary} = data;
    set(state => ({...state, Theme: {...state.Theme, primary, textPrimary}}));
  },
}));

export default StoreTransaction;
