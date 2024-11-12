import { Router } from "express";
import {
  createExpense,
  getExpensesByFilters,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from "../controllers/controller.js";

const router = Router();

router.post("/expense", createExpense);
router.post("/expenses", getExpensesByFilters);
router.put("/expense-update", updateExpense);
router.delete("/expense", deleteExpense);
router.get("/expenses/:id", getExpenseById);

export default router;
