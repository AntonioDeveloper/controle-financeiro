"use client"

import { IconChevronRight, IconCircleFilled, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../context/context";
import getRegistersByStatus from "@/backend/casos-uso/filter-registers-by-status";
import { BRLformat } from "../utils/currencyFormatting";
import MonthSelector from "./MonthSelector";
import getRegistersByMonth from "@/backend/casos-uso/filter-registers-by-month";
import TotalsDisplay from "./TotalsDisplay";

export default function Register() {
  const { status, registers, setRegisters, loadRegisters, selectedMonth } = useContext(GeneralContext);

  useEffect(() => {
    loadRegisters();
  }, []);

  useEffect(() => {
    if (status === "Mensal") {
      filterRegistersByMonth(selectedMonth)
    }
  }, [selectedMonth]);


  async function filterRegisters(status: string) {
    const filteredRegs = await getRegistersByStatus(status);
    setRegisters(filteredRegs);
  }

  async function filterRegistersByMonth(month: string) {
    const filteredRegs = await getRegistersByMonth(month);
    setRegisters(filteredRegs);
  }



  useEffect(() => {
    if (status === "Todos") {
      loadRegisters();
    } else {
      filterRegisters(status);
    }
  }, [status]);

  return (
    <div id="table" className="flex flex-col w-[65%]">
      {
        status === "Mensal"
          ?
          <MonthSelector />
          :
          ""
      }
      {
        registers.map((reg: any) => (
          <Link key={reg.id} href={{ pathname: "/dashboard", query: { id: reg.id, date: reg.date, type: reg.type, description: reg.description, value: reg.value, status: reg.status } }} className="w-full flex justify-between bg-slate-800 rounded py-4 px-2 mb-4">
            <div id="left-infos" className="flex w-3/5 justify-between">
              <span id="id" className="text-white font-bold">{`#${reg.id.
                substring(0, 6)}`}</span>
              <span id="data" className="text-slate-400">{reg.date}</span>
              <span id="descricao" className="text-white font-bold">{reg.type}
              </span>
              {
                reg.type === "Receita"
                  ?
                  <span id="tipo" className="text-green-500"><IconTrendingUp stroke={2} /></span>
                  :
                  <span id="tipo" className="text-red-500"><IconTrendingDown stroke={2} /></span>
              }
              <span id="valor" className="text-white font-bold flex justify-between w-2/5">
                {BRLformat.format(reg.value)}
              </span>
            </div>
            <div id="right-infos" className="flex w-2/5 justify-end">
              {
                reg.status.charAt(0).toUpperCase() + reg.status.slice(1) === "Consolidado"
                  ?
                  <span id="status" className="text-green-500 flex w-2/5 items-center  "><IconCircleFilled size={16} className="mr-1" />  {reg.status}</span>
                  :
                  (
                    reg.status.charAt(0).toUpperCase() + reg.status.slice(1) === "Pendente"
                      ?
                      <span id="status" className="text-yellow-500 flex w-2/5 items-center "><IconCircleFilled size={16} className="mr-1" />  {reg.status}</span>
                      :
                      <span id="status" className="text-red-500 flex w-2/5 items-center "><IconCircleFilled size={16} className="mr-1" />  {reg.status}</span>
                  )
              }
              <span className="text-white"><IconChevronRight stroke={1} /></span>
            </div>
          </Link>
        ))}

      <TotalsDisplay />
    </div>
  )
}