import { useState, useEffect } from "react";
import * as budgetService from "../services/budgetService";
import { BudgetContext } from "./BudgetContext";


export function BudgetProvider({ children }) {

  const [budgets, setBudgets] = useState([]);

  const fetchBudgets = async () => {

    const data = await budgetService.getBudgets();

    const formatted = data.map(b => ({
      id: b.id,
      category: b.category,
      limit: Number(b.limit_amount),
      spent: Number(b.spent_amount || 0),
    }));

    setBudgets(formatted);
  };

  const addBudget = async (budget) => {

    await budgetService.createBudget(budget);

    fetchBudgets();
  };

  const removeBudget = async (id) => {

    await budgetService.deleteBudget(id);

    fetchBudgets();
  };

  useEffect(() => {

    fetchBudgets();

  }, []);

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        fetchBudgets,
        addBudget,
        removeBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}