"use client"

import Pagina from "./template/Pagina";
import RegistersTable from "./template/RegistersTable";

export default function Home() {

  return (
    <Pagina titulo="Minhas Finanças">
      <RegistersTable />
    </Pagina >
  );
}