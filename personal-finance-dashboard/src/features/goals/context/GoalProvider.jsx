import { useState, useEffect } from "react";
import { GoalContext } from "./GoalContext";
import * as goalService from "../services/goalService";

export function GoalProvider({ children }) {

  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    const data = await goalService.getGoals();
    setGoals(data);
  };

  const addGoal = async (goal) => {
    await goalService.createGoal(goal);
    fetchGoals();
  };

  const removeGoal = async (id) => {
    await goalService.deleteGoal(id);
    fetchGoals();
  };
//  const editGoal = async (id) => {
//     await goalService.editGoal(id);
//     fetchGoals();
//   };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <GoalContext.Provider
      value={{
        goals,
        fetchGoals,
        addGoal,
        removeGoal
      }}
    >
      {children}
    </GoalContext.Provider>
  );
}