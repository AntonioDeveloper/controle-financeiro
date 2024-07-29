"use server"

import RepositorioTarefa from "../db/RepositorioTarefa"

export default async function getRegistersByStatus(status: string) {
  const repo = new RepositorioTarefa();
  return await repo.filterRegisterByStatus(status);
}