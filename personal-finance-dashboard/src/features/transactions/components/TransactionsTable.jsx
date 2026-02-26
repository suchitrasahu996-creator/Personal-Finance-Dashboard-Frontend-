import { useTransactions } from "../hooks/useTransactions";
import AddTransactionForm from "./AddTransactionForm";

export default function TransactionsTable() {

  const {
    transactions,
    removeTransaction
  } = useTransactions();

  return (
    <div className="bg-blue-100 rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-4">
        Recent Transactions
      </h2>

      <AddTransactionForm />

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center py-6">
          No transactions added yet.
        </p>
      ) : (

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {transactions.map((t) => (

                <tr key={t.id}>

                  <td>{t.title}</td>
                  <td>{t.category}</td>

                  <td className={
                    t.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }>
                    ₹{t.amount}
                  </td>

                  <td>{t.type}</td>

                  <td>{t.date}</td>

                  <td>

                    <button
                      onClick={() =>
                        removeTransaction(t.id)
                      }
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}