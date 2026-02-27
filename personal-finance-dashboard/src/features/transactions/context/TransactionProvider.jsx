import { useState, useEffect } from "react";
import * as transactionService from "../services/transactionService";
import { TransactionContext } from "./TransactionContext";

export function TransactionProvider({ children }) {

  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const data = await transactionService.getTransactions();

    const formatted = data.map((t) => ({
      id: t.id,
      title: t.description,
      amount: Number(t.amount),
      type: t.type,
      category: t.category,
      date: t.date,
    }));

    setTransactions(formatted);
  };

  const addTransaction = async (transaction) => {
    await transactionService.createTransaction(transaction);
    fetchTransactions();
  };

  const removeTransaction = async (id) => {
    await transactionService.deleteTransaction(id);
    fetchTransactions();
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        addTransaction,
        removeTransaction
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}