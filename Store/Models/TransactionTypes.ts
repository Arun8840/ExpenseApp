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
