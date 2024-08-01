export interface TransactionTypes {
  id: string | number;
  title: string;
  paymentType: string;
  date: string;
  totalAmount: number;
  icon?: string;
  image: string;
  description: string;
  expenseCategory: string;
}

export interface CategoryTypes {
  id: any;
  name: string;
  description: string;
  monthlyBudget: number;
  bgColor: string;
  color: string;
  icon: string;
  useage?: number;
  totalAmount: number[];
  budget: {
    amount: number;
    isBudgeted: boolean;
  };
}

export interface CardTypes {
  id: number;
  holderName: string;
  accountNo: number;
  accountType: string;
  icon: string;
  isSelected: boolean;
  amount: number;
}

export interface RemainderTypes {
  id: number;
  category: string;
  description: string;
  amount: any;
  date: any;
  notes: string;
  isDateOpen?: boolean;
}
