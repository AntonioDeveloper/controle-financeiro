"use client"

import updateRegister from "@/backend/casos-uso/update-register";
import { IconCircleFilled, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface RegisterCardProps {
  id: any,
  date: any,
  type: any,
  description: any,
  value: any,
  status: any,
  openEdition: boolean
}

export default function RegisterCard(props: RegisterCardProps) {

  // console.log("PROPS", props);

  const [newDescription, setNewDescription] = useState("");
  const [newType, setNewType] = useState("");
  const [newValue, setNewValue] = useState(0);

  function handleDescriptionChange(e: any) {
    setNewDescription(e.target?.value);
  }

  function handleTypeChange(e: any) {
    setNewType(e.target?.value);
  }

  function handleValueChange(e: any) {
    setNewValue(e.target?.value);
  }

  // useEffect(() => {
  //   console.log("Description", newDescription, "Type", newType, "Value", newValue);
  // }, [newDescription, newType, newValue]);

  let formDataObj = {
    id: "",
    date: "",
    description: "",
    type: "",
    value: "",
    status: "",
  };

  if (typeof document !== 'undefined' && document.forms[1]) {
    formDataObj = {
      id: props.id,
      date: Date.now().toString(),
      description: (document.forms[1][0] as HTMLInputElement).value,
      type: (document.forms[1][1] as HTMLInputElement).value,
      value: (document.forms[1][2] as HTMLInputElement).value,
      status: "Consolidado",
    }
  } else {
    formDataObj = {
      id: "",
      date: "",
      description: "",
      type: "",
      value: "",
      status: "",
    };
  }

  return (
    // <h1 className="text-white">TESTE</h1>
    <div className="bg-slate-800 rounded py-4 mt-4 flex p-2 flex-col">
      {
        props.openEdition === false
          ?
          (<>
            <div className="w-full flex justify-between">
              <div className="flex flex-col w-1/6 justify-between">
                <h1 className="font-bold">{props.id}</h1>
                <span className="font-bold text-slate-400 text-2xl">{props.description}</span>
              </div>
              <div className="flex flex-col w-1/6">
                <span className="text-slate-400 text-sm">Status do Registro</span>
                <span className="flex justify-around text-green-500 items-center p-2 mt-2 bg-green-500/30 rounded"><IconCircleFilled stroke={2} size={16} />
                  {props.status}</span>
              </div>
            </div>

            <div className="w-full flex mt-10">
              <div className="flex flex-col w-1/3">
                <span className="text-slate-400 text-sm">Data do Registro</span>
                <span className="font-bold text-white">{props.date}</span>
              </div>
              <div className="flex flex-col w-1/3">
                <span className="text-slate-400 text-sm">Tipo Registro</span>
                <span className="font-bold"> {props.type === "Receita"
                  ?
                  (
                    <div className="text-green-500 flex">
                      <IconTrendingUp stroke={2} className="mr-0.5" /> RECEITA
                    </div>
                  )
                  :
                  (
                    <div className="text-red-500 flex">
                      <IconTrendingDown stroke={2} className="mr-0.5" /> DESPESA
                    </div>
                  )
                }</span>
              </div>
              <div className="flex flex-col w-1/3">
                <span className="text-slate-400 text-sm">Valor Registro</span>
                <span className="font-bold text-white">{props.value}</span>
              </div>
            </div>
          </>)
          :
          (
            <form action="" className="">
              <div className="w-full flex justify-between">
                <div className="flex flex-col w-1/6 justify-between">
                  <h1 className="font-bold">{props.id}</h1>
                  <input type="text" placeholder={props.description} className="font-bold text-slate-400 text-2xl" onChange={handleDescriptionChange} />
                </div>
                <div className="flex flex-col w-1/6">
                  <span className="text-slate-400 text-sm">Status do Registro</span>
                  <span className="flex justify-around text-orange-500 items-center p-2 mt-2 bg-orange-500/30 rounded"><IconCircleFilled stroke={2} size={16} />
                    Pendente</span>
                </div>
              </div>

              <div className="w-full flex mt-10">
                <div className="flex flex-col w-1/3">
                  <span className="text-slate-400 text-sm">Data do Registro</span>
                  <span className="font-bold text-white">{Date.now()}</span>
                </div>
                <div className="flex flex-col w-1/3">
                  <label className="text-slate-400 text-sm">Tipo Registro</label>
                  <input type="text" className="font-bold text-slate-400" placeholder={props.type} onChange={handleTypeChange} />
                </div>
                <div className="flex flex-col w-1/3">
                  <label className="text-slate-400 text-sm">Valor Registro</label>
                  <input className="font-bold text-slate-400" placeholder={props.value} onChange={handleValueChange} />
                </div>
              </div>

              <div className="w-full flex mt-10">
                <button className="px-4 py-1 rounded-full bg-purple-600" onClick={(e) => { e.preventDefault(); updateRegister(formDataObj) }}>Salvar</button>
                <button className="px-4 py-1 rounded-full bg-red-600" >Excluir</button>
              </div>
            </form>
          )
      }
    </div>
  )
}