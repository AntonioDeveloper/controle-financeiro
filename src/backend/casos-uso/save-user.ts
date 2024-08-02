"use server"

import Id from "@/core/utils/id";
import RepositorioTarefa from "../db/RepositorioTarefa";
import { User } from "@/core/model/user";


export default async function saveUser(user: any) {
  console.log("TESTE", user)
  // const newUser = {
  //   ...user, 
  //   id: Id.generate()
  // }

  // const repo = new RepositorioTarefa;

  // return await repo.insertNewUser(newUser);

  // return {
  //   id: Id.generate(),
  //   name: "Antonio"
  // }
  const repo = new RepositorioTarefa();
  return await repo.insertNewUser(user);
}