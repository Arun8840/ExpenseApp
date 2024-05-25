export interface TransactionTypes {
  id: string | number;
  title: string;
  paymentType: string;
  date: string;
  totalAmount: number;
  icon?: string;
  image: string;
  description: string;
}
