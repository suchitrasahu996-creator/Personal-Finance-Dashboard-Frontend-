import React from 'react'
import AddTransactionForm from "./AddTransactionForm";
import TransactionsTable from './TransactionsTable';

const TransactionsTableWrapper = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Recent Transactions
      </h2>

      <AddTransactionForm />
      <TransactionsTable/>
    </div>
  )
}

export default TransactionsTableWrapper
