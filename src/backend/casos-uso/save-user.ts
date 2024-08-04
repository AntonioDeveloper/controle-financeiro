"use server"

import Id from "@/core/utils/id";
import RepositorioTarefa from "../db/RepositorioTarefa";
import { User } from "@/core/model/user";


export default async function saveUser(user: any) {
  const repo = new RepositorioTarefa();
  return await repo.insertNewUser(user);
}