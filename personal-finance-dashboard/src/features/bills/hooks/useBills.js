import { useContext } from "react";
import { BillContext } from "../context/BillContext";

export const useBills = () => {

  const context = useContext(BillContext);

  if (!context) {
    throw new Error(
      "useBills must be used within BillProvider"
    );
  }

  return context;
};