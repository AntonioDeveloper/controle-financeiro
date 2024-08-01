"use server"

import Id from "@/core/utils/id";
import RepositorioTarefa from "../db/RepositorioTarefa";


export default async function saveRegister(register: any) {

  const newRegister = {
    ...register,
    id: Id.generate()
  }

  const repo = new RepositorioTarefa;

  return await repo.insert(newRegister);
}