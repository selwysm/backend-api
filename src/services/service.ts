import { Expense } from "../models/expense.model.js";
import { IExpenseInput } from "../utils/utils.js";

export const createExpenseService = async (expenseData: IExpenseInput) => {
  const expense = new Expense(expenseData);
  await expense.save();
  return expense;
};

export const getExpensesByCategoriesAndDateService = async (
  categories: string[],
  dateRange: { $gte?: Date; $lte?: Date }
) => {
  const filter: any = {};

  if (categories.length > 0) {
    filter.category = { $in: categories };
  }

  if (dateRange.$gte || dateRange.$lte) {
    filter.date = dateRange;
  }

  return await Expense.find(filter);
};

export const getExpenseByIdService = async (id: string) => {
  return await Expense.findById(id);
};

export const updateExpenseService = async (
  id: string,
  expenseData: IExpenseInput
) => {
  return await Expense.findByIdAndUpdate(id, expenseData, {
    new: true,
    runValidators: true,
  });
};

export const deleteExpenseService = async (id: string) => {
  return await Expense.findByIdAndDelete(id);
};
