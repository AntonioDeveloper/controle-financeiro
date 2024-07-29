'use client'

import { createContext, useState } from "react";

export interface ContextProps {
  status: string;
  setStatus: () => void;
}

export const GeneralContext = createContext({} as any);


export default function ContextProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<any>();

  return (
    <GeneralContext.Provider value={{ status, setStatus }}>
      {children}
    </GeneralContext.Provider>
  )
}
