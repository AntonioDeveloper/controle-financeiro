"use server"

import { Register } from "@/core/model/register";
import RepositorioTarefa from "../db/RepositorioTarefa";

export default async function updateRegister(register: Register) {
  const repo = new RepositorioTarefa();

  return repo.update(register);
}