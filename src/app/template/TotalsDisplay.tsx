import { useContext } from "react";
import { GeneralContext } from "../context/context"

export default function TotalsDisplay() {

  const { filterRegistersByType } = useContext(GeneralContext);

  const totalEarnings = filterRegistersByType().regsEarnings;
  const totalExpenses = filterRegistersByType().regsExpenses;

  return (
    <div className="flex w-full text-white">
      <div className="" id="receitas">{totalEarnings}</div>
      <div className="" id="despesas">{totalExpenses}</div>
    </div>
  )
}