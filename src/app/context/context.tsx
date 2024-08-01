'use client'

import getRegistersByMonth from "@/backend/casos-uso/filter-registers-by-month";
import fillRegistersTab from "@/backend/casos-uso/get-all-registers";
import { Register } from "@/core/model/register";
import { createContext, useEffect, useState } from "react";

export interface ContextProps {
  status: string;
  setStatus: () => void;
  register: Register;
  setRegisters: () => void;
  selectedMonth: string;
  setSelectedMonth: () => void;
}

export const GeneralContext = createContext({} as any);


export default function ContextProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<any>();
  const [registers, setRegisters] = useState<Register[]>([]);
  const [selectedMonth, setSelectedMonth] = useState("");

  async function loadRegisters() {
    const regs = await fillRegistersTab();
    setRegisters(regs);
  }

  async function loadRegistersByMonth() {
    const regs = await getRegistersByMonth(selectedMonth);
    console.log("REGS", regs);
    return regs;
  }

  useEffect(() => {
    loadRegistersByMonth();
  }, [selectedMonth]);

  return (
    <GeneralContext.Provider value={{ status, setStatus, registers, setRegisters, loadRegisters, selectedMonth, setSelectedMonth }}>
      {children}
    </GeneralContext.Provider>
  )
}
