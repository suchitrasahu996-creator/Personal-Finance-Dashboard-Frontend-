export default function BillsReminder() {
  const bills = [
    { id: 1, name: "Electricity", due: "25 Feb" },
    { id: 2, name: "Credit Card", due: "28 Feb" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Upcoming Bills</h2>

      {bills.map((bill) => (
        <div
          key={bill.id}
          className="flex justify-between border-b py-2"
        >
          <span>{bill.name}</span>
          <span className="text-red-500">{bill.due}</span>
        </div>
      ))}
    </div>
  );
}