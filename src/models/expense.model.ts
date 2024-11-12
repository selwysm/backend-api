import mongoose, { Schema, Document } from 'mongoose';

export interface IExpense extends Document {
  amount: number;
  category: string;
  date: Date;
  description?: string;
}

const ExpenseSchema: Schema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Comida', 'Transporte', 'Entretenimiento','Otros']
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

export const Expense = mongoose.model<IExpense>('Expense', ExpenseSchema);
