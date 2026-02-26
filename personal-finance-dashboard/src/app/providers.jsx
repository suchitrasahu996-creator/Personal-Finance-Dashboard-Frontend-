import { AuthProvider } from "../features/auth/context/AuthProvider";
import { GoalProvider } from "../features/goals/context/GoalProvider";
import { TransactionProvider } from "../features/transactions/context/TransactionProvider";
import { BudgetProvider } from "../features/budget/context/BudgetProvider";
import { BillProvider } from "../features/bills/context/BillProvider";

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <GoalProvider>
        <TransactionProvider>
          <BudgetProvider>
            <BillProvider>
              {children}
            </BillProvider>
          </BudgetProvider>
        </TransactionProvider>
      </GoalProvider>
    </AuthProvider>
  );
}