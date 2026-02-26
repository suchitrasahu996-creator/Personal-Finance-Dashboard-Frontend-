import { useContext } from "react";
import { GoalContext } from "../context/GoalContext";

export const useGoals = () => useContext(GoalContext);