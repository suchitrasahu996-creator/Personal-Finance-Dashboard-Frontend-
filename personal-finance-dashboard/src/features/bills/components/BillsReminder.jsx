import { useBills } from "../hooks/useBills";
import AddBillForm from "./AddBillForm";

export default function BillsReminder() {

  const {
    bills,
    markPaid,
    removeBill
  } = useBills();

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Upcoming Bills
      </h2>

      <AddBillForm />

      {bills.length === 0 ? (

        <p className="text-gray-500">
          No bills added yet.
        </p>

      ) : (

        bills.map(bill => (

          <div
            key={bill.id}
            className="flex justify-between items-center border-b py-2"
          >

            <div>

              <p className="font-medium">
                {bill.name}
              </p>

              <p className="text-sm text-gray-500">
                ₹{bill.amount}
              </p>

            </div>

            <div className="flex gap-2">

              <span className="text-red-500">
                {new Date(
                  bill.dueDate
                ).toLocaleDateString()}
              </span>

              {bill.status !== "paid" && (

                <button
                  onClick={() =>
                    markPaid(bill.id)
                  }
                  className="bg-green-500 text-white px-2 py-1 rounded text-sm"
                >
                  Paid
                </button>

              )}

              <button
                onClick={() =>
                  removeBill(bill.id)
                }
                className="bg-red-500 text-white px-2 py-1 rounded text-sm"
              >
                Delete
              </button>

            </div>

          </div>

        ))

      )}

    </div>

  );
}