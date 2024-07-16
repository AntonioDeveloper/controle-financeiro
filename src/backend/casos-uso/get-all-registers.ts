"use server"

import RepositorioTarefa from "../db/RepositorioTarefa"

export default async function fillRegistersTab() {
  const repo = new RepositorioTarefa();
  return await repo.getAllRegisters();
}