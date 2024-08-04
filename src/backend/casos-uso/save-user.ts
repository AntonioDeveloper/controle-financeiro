"use server"

import RepositorioTarefa from "../db/RepositorioTarefa";

export default async function saveUser(user: any) {
  const repo = new RepositorioTarefa();
  return await repo.insertNewUser(user);
}