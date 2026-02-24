import Layout from "../components/layout/Layout";
import SummaryCards from "../components/dashboard/SummaryCards";
import TransactionsTable from "../components/dashboard/TransactionsTable";
import GoalsList from "../components/goals/GoalsList";
import BudgetPlanner from "../components/budget/BudgetPlanner";
import Charts from "../components/insights/Charts";
import BillsReminder from "../components/bills/BillsReminder";

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