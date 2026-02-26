import { useState, useEffect } from "react";
import * as billService from "../services/billService";
import { BillContext } from "./BillContext";
export function BillProvider({ children }) {

  const [bills, setBills] = useState([]);

  const fetchBills = async () => {

    const data = await billService.getBills();

    const formatted = data.map(b => ({
      id: b.id,
      name: b.name,
      amount: Number(b.amount),
      dueDate: b.due_date,
      status: b.status,
    }));

    setBills(formatted);

  };

  const addBill = async (bill) => {
    await billService.createBill(bill);
    fetchBills();
  };

  const markPaid = async (id) => {
    await billService.updateBillStatus(id, "paid");
    fetchBills();
  };

  const removeBill = async (id) => {
    await billService.deleteBill(id);
    fetchBills();
  };

  useEffect(() => {
    fetchBills();
  }, []);

  return (
    <BillContext.Provider
      value={{
        bills,
        addBill,
        markPaid,
        removeBill,
        fetchBills,
      }}
    >
      {children}
    </BillContext.Provider>
  );
}