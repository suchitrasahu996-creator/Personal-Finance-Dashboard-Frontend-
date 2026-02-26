import { useState } from "react";

export default function BudgetPlanner() {

  const [text, setText] = useState("");

  const handleSubmit = async () => {

    try {

      const response = await fetch(
      "http://localhost:3000/api/ai/budget-advice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
          question: text
        })
        }
      );

      const data = await response.json();

      console.log(data.relpy);

    } catch (error) {
      console.log(error.message);
    }

  };

  return (
    <div className="bg-blue-100 p-6 rounded-xl shadow border-2 border-r-black">

      <h2 className="text-xl font-bold mb-4 text-blue-400">
        Monthly Budget Planner
      </h2>
      <p className="text-gray-600"> AI suggestions based on your spending trends will appear here. </p>

      <input className="  border border-gray-400 rounded px-3 mr-3"
        type="text"
        placeholder="Ask budget question"
        value={text}
        onChange={(e) => setText(e.target.value)}
      /><br/>
      <br/>

      <button onClick={handleSubmit} className="  border-2 py-2 px-2.5 rounded-2xl  bg-blue-500 text-white hover:bg-blue-600">
        submit
      </button>

    </div>
  );
}

