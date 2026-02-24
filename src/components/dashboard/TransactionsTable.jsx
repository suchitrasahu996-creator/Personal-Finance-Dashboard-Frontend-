export default function TransactionsTable({ transactions = [], onDelete }) {
  const handleAddTransaction = () =>{
    
  }
  
  
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div>
          <button onClick={handleAddTransaction}>Add Transactions</button>
        </div>
      </div>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center py-6">
          No transactions added yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-500 text-sm">
                <th className="py-3">Title</th>
                <th className="py-3">Category</th>
                <th className="py-3">Amount</th>
                <th className="py-3">Type</th>
                <th className="py-3">Date</th>
                <th className="py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">{t.title}</td>
                  <td className="py-3 text-gray-600">{t.category || "-"}</td>

                  <td
                    className={`py-3 font-semibold ${
                      t.type === "income" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    ₹{t.amount}
                  </td>

                  <td
                    className={`py-3 capitalize ${
                      t.type === "income" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {t.type}
                  </td>

                  <td className="py-3 text-gray-500">{t.date || "-"}</td>

                  <td className="py-3 text-center">
                    <button
                      onClick={() => onDelete && onDelete(t.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm"
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
