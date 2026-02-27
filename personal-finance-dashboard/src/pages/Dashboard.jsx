import Layout from "../shared/components/layout";
import SummaryCards from "../features/transactions/components/SummaryCards";
import TransactionsTable from "../features/transactions/components/TransactionsTable";
import GoalsList from "../features/goals/components/GoalsList";
import Charts from "../features/insight/components/Charts";
import BillsReminder from "../features/bills/components/BillsReminder";
import TransactionsTableWrapper from "../features/transactions/components/TransactionsTableWrapper";

export default function Dashboard() {
  return (
    <Layout>
      {(activeModule) => {
        switch (activeModule) {
          case "dashboard":
            return (
              <>
                <SummaryCards />
                <TransactionsTable viewMode={true} />
              </>
            );

          case "transactions":
            return <TransactionsTableWrapper />;

          case "goals":
            return <GoalsList />;

          case "budget":
            return <div>Coming Soon!</div> ;

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