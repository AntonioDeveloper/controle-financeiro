"use server"

import RepositorioTarefa from "../db/RepositorioTarefa"

export default async function findUserByEmail(email: string, password: string) {

  const repo = new RepositorioTarefa();

  return await repo.getSingleUser(email, password);

}