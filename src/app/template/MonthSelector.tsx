"use client"

import getRegistersByMonth from "@/backend/casos-uso/filter-registers-by-month";
import { useContext } from "react";
import { GeneralContext } from "../context/context";

export default function MonthSelector() {

  const { setSelectedMonth } = useContext(GeneralContext);

  return (
    <div className="flex w-2/4 p-2 text-white justify-between">
      <button className="" id="01" onClick={() => setSelectedMonth("01")}>1</button>
      <button className="" id="02" onClick={() => setSelectedMonth("02")}>2</button>
      <button className="" id="03" onClick={() => setSelectedMonth("03")}>3</button>
      <button className="" id="04" onClick={() => setSelectedMonth("04")}>4</button>
      <button className="" id="05" onClick={() => setSelectedMonth("05")}>5</button>
      <button className="" id="06" onClick={() => setSelectedMonth("06")}>6</button>
      <button className="" id="07" onClick={() => setSelectedMonth("07")}>7</button>
      <button className="" id="08" onClick={() => setSelectedMonth("08")}>8</button>
      <button className="" id="09" onClick={() => setSelectedMonth("09")}>9</button>
      <button className="" id="10" onClick={() => setSelectedMonth("10")}>10</button>
      <button className="" id="11" onClick={() => setSelectedMonth("11")}>11</button>
      <button className="" id="12" onClick={() => setSelectedMonth("12")}>12</button>
    </div>
  )
}