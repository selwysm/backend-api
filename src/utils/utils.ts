export interface IExpenseInput {
  amount: number;
  date: Date;
  category: string;
  description?: string;
}

export const ALLOWED_CATEGORIES = [
  "Comida",
  "Transporte",
  "Entretenimiento",
  "Otros",
];
