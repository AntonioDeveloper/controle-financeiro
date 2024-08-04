"use client"

import Pagina from "@/app/template/Pagina";
import RegistersTable from "@/app/template/RegistersTable";


export default function Home() {

  return (
    <Pagina titulo="Minhas Finanças">
      <RegistersTable />
    </Pagina >
  );
}