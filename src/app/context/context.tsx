'use client'

import getRegistersByMonth from "@/backend/casos-uso/filter-registers-by-month";
import fillRegistersTab from "@/backend/casos-uso/get-all-registers";
import { Register } from "@/core/model/register";
import { createContext, useEffect, useState } from "react";
import { BRLformat } from "../utils/currencyFormatting";
import { User } from "@/core/model/user";

export interface ContextProps {
  status: string;
  setStatus: () => void;
  register: Register;
  setRegisters: () => void;
  selectedMonth: string;
  setSelectedMonth: () => void;
  filterRegistersByType: () => { regsEarnings: number, regsExpenses: number };
  loggedUser: User;
  setLoggedUser: () => void;
}

export const GeneralContext = createContext({} as any);

export default function ContextProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<any>();
  const [registers, setRegisters] = useState<Register[]>([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [loggedUser, setLoggedUser] = useState({});

  async function loadRegisters() {
    const regs = await fillRegistersTab();
    setRegisters(regs);
  }

  async function loadRegistersByMonth() {
    const regs = await getRegistersByMonth(selectedMonth);
    return regs;
  }

  useEffect(() => {
    loadRegistersByMonth();
  }, [selectedMonth]);

  let regsEarnings: number = 0;
  let regsExpenses: number = 0;

  function filterRegistersByType() {
    regsEarnings = registers.filter((register: Register) => {
      return register.type === "Receita";
    }).map((reg: Register) => {
      return Number(reg.value);
    }).reduce((curr, acc) => {
      return curr + acc;
    }, 0);


    regsExpenses = registers.filter((register: Register) => {
      return register.type === "Despesa";
    }).map((reg: Register) => {
      return Number(reg.value);
    }).reduce((curr, acc) => {
      return curr + acc;
    }, 0);

    return {
      regsEarnings: BRLformat.format(regsEarnings),
      regsExpenses: BRLformat.format(regsExpenses),
    }
  }

  return (
    <GeneralContext.Provider value={{ status, setStatus, registers, setRegisters, loadRegisters, selectedMonth, setSelectedMonth, filterRegistersByType, loggedUser, setLoggedUser }}>
      {children}
    </GeneralContext.Provider>
  )
}
