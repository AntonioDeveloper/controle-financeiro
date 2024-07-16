"use client"

import { IconSquareLetterX } from "@tabler/icons-react";
import { useState } from "react";
import saveRegister from "@/backend/casos-uso/save-register";

interface ModalNewRegisterProps {
  activate: boolean,
  toggleActive: () => void,
}

export default function ModalNewRegister(props: ModalNewRegisterProps) {

  const [register, setRegister] = useState<any>(null);

  async function clickSaveRegister(e: any) {
    e.preventDefault();

    const type = document.forms[1][0] as HTMLInputElement;
    const description = document.forms[1][1] as HTMLInputElement;
    const regValue = document.forms[1][2] as HTMLInputElement;
    const status = document.forms[1][3] as HTMLInputElement;

    console.log("Type", type.value, "Descr", description.value)

    const newRegister = await saveRegister({
      type: type.value,
      description: description.value,
      date: "16/07/2024",
      value: regValue.value,
      status: status.value
    });
    setRegister(newRegister);
  }

  return (
    <div className="w-full h-full bg-slate-200/50 absolute top-0">
      <div className="w-2/4 h-2/4 bg-slate-800 absolute top-1/4 left-1/4 flex flex-col rounded text-white p-4">
        <div className="flex">
          <h1>Novo Registro</h1>
          <button onClick={props.toggleActive}><IconSquareLetterX stroke={2} /></button>
        </div>
        <form action="" className="flex flex-col mt-4" name="new-register">
          <input type="text" id="type" placeholder="Receita ou despesa?" className="rounded mb-4 pl-2 text-slate-800" />
          <input type="text" id="description" placeholder="Descrição" className="rounded mb-4 pl-2 text-slate-800" />
          <input type="number" id="value" placeholder="Valor" className="rounded mb-4 pl-2 text-slate-800" />
          <input type="text" placeholder="Status" className="rounded mb-4 pl-2 text-slate-800" />
          <button className="p-3 bg-slate-600 hover:bg-slate-400" onClick={(e) => clickSaveRegister(e)}>Salvar</button>
        </form>
      </div>
    </div >
  )
}