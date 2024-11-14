import { Request, Response } from "express";
import {
  createExpenseService,
  getExpenseByIdService,
  updateExpenseService,
  deleteExpenseService,
  getExpensesByCategoriesAndDateService,
} from "../services/service.js";
import { ALLOWED_CATEGORIES, IExpenseInput } from "../utils/utils.js";

export const createExpense = async (req: Request, res: Response) => {
  try {
    const { amount, date, category, description } = req.body;
    const expenseData: IExpenseInput = {
      amount,
      date: new Date(date),
      category,
      description,
    };
    const expense = await createExpenseService(expenseData);
    res
      .status(201)
      .json({ message: "Expense registered successfully", expense , success: true });
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export const getExpensesByFilters = async (req: Request, res: Response) => {
  try {
    const { categories, startDate, endDate } = req.body;

    if (
      categories &&
      (!Array.isArray(categories) ||
        categories.some((category) => !ALLOWED_CATEGORIES.includes(category)))
    ) {
      return res.status(400).json({
        message: `Invalid categories. Allowed values are: ${ALLOWED_CATEGORIES.join(
          ", "
        )}`,
      });
    }

    let dateRange: { $gte?: Date; $lte?: Date } = {};
    if (startDate) {
      const parsedStartDate = new Date(startDate);
      if (isNaN(parsedStartDate.getTime())) {
        return res.status(400).json({ message: "Invalid start date format." });
      }
      dateRange.$gte = parsedStartDate;
    }
    if (endDate) {
      const parsedEndDate = new Date(endDate);
      if (isNaN(parsedEndDate.getTime())) {
        return res.status(400).json({ message: "Invalid end date format." });
      }
      parsedEndDate.setUTCHours(23, 59, 59, 999);
      dateRange.$lte = parsedEndDate;
    }

    const expenses = await getExpensesByCategoriesAndDateService(
      categories || [],
      dateRange
    );
    res.status(200).json(expenses);
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: "Error retrieving expenses" });
  }
};

export const getExpenseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const expense = await getExpenseByIdService(id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json(expense);
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: "Error retrieving expense" });
  }
};

export const updateExpense = async (req: Request, res: Response) => {
  try {
    const { amount, date, category, description, id } = req.body;
    const expenseData: IExpenseInput = {
      amount,
      date: new Date(date),
      category,
      description,
    };
    const updatedExpense = await updateExpenseService(id, expenseData);
    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res
      .status(200)
      .json({ message: "Expense updated successfully", updatedExpense , success: true });
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: "Error updating expense"  , success: false});
  }
};

export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const deletedExpense = await deleteExpenseService(id);
    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted successfully", success: true });
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: "Error deleting expense" , success: false});
  }
};
