"use client"

import Pagina from "./template/Pagina";
import RegistersTable from "./template/RegistersTable";


export default function Home() {

  return (
    <Pagina titulo="Minhas Finanças" notifications={`Você possui ${2} registro(s)`}>
      <RegistersTable />
    </Pagina>
  );
}