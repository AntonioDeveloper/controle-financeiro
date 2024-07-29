'use client'

import fillRegistersTab from "@/backend/casos-uso/get-all-registers";
import { Register } from "@/core/model/register";
import { createContext, useState } from "react";

export interface ContextProps {
  status: string;
  setStatus: () => void;
}

export const GeneralContext = createContext({} as any);


export default function ContextProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<any>();
  const [registers, setRegisters] = useState<Register[]>([]);

  async function loadRegisters() {
    const regs = await fillRegistersTab();
    setRegisters(regs);
  }

  return (
    <GeneralContext.Provider value={{ status, setStatus, registers, setRegisters, loadRegisters }}>
      {children}
    </GeneralContext.Provider>
  )
}
