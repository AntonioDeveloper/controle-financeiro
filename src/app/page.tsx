"use client"

import { useEffect, useState } from "react";
import Pagina from "./template/Pagina";
import RegistersTable from "./template/RegistersTable";
import fillRegistersTab from "@/backend/casos-uso/get-all-registers";

export default function Home() {

  const [register, setRegister] = useState<any>(null);

  useEffect(() => {
    loarRegisters();
  }, []);

  async function loarRegisters() {
    const regs = await fillRegistersTab();
    setRegister(regs);
  }

  console.log("register", register);


  return (
    <Pagina titulo="Minhas Finanças" notifications={`Você possui ${2} registro(s)`}>
      <RegistersTable />
      {register
        &&
        register.map((r: any) => (
          <p className="text-white" key={r.id}>{r.description}, {r.type}, {r.value}</p>
        ))}
    </Pagina>
  );
}