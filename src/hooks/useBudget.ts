import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const useBudget = () => {
    const context = useContext(BudgetContext);
    if(!context){
        throw new Error('usedBudget must be used within a BudgetProvider');
    }
    return context;
}