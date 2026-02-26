import Layout from "../shared/components/layout";
import SummaryCards from "../features/transactions/components/SummaryCards";
import TransactionsTable from "../features/transactions/components/TransactionsTable";
import GoalsList from "../features/goals/components/GoalsList";
import BudgetPlanner from "../features/budget/components/BudgetPlanner";
import Charts from "../features/insight/components/Charts";
import BillsReminder from "../features/bills/components/BillsReminder";

export default function Dashboard() {
  return (
    <Layout>
      {(activeModule) => {
        switch (activeModule) {
          case "dashboard":
            return (
              <>
                <SummaryCards />
                <TransactionsTable />
              </>
            );

          case "transactions":
            return <TransactionsTable />;

          case "goals":
            return <GoalsList />;

          case "budget":
            return <BudgetPlanner />;

          case "insights":
            return <Charts />;

          case "bills":
            return <BillsReminder />;

          default:
            return <SummaryCards />;
        }
      }}
    </Layout>
  );
}