import { useContext } from "react";
import { GeneralContext } from "../context/context";

export default function Filter() {

  const { setStatus } = useContext(GeneralContext);

  return (
    <form action="">
      <select name="status" id="status" className="text-white bg-black" onChange={e => setStatus(e.target.value)}>
        <option value="Todos">Todos</option>
        <option value="Consolidado">Consolidado</option>
        <option value="Cancelado">Cancelado</option>
        <option value="Pendente">Pendente</option>
      </select>
    </form >
  )
}