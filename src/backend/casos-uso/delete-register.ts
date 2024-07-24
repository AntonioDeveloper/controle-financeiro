"use server"
import RepositorioTarefa from "../db/RepositorioTarefa";


export default async function deleteRegister(id: any) {

  const repo = new RepositorioTarefa;
  console.log("DEL REG", id);
  return await repo.delete(id);
}