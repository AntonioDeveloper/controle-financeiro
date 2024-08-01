"use server"

import RepositorioTarefa from "../db/RepositorioTarefa"

export default async function getRegistersByMonth(month: string) {
  const repo = new RepositorioTarefa();
  return await repo.filterRegisterByMonth(month);
}