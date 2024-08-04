"use client"

import saveUser from "@/backend/casos-uso/save-user";
import Id from "@/core/utils/id";
import Link from "next/link";

export default function SignIn() {

  async function userSignUp(e: any) {

    e.preventDefault();

    const nameInput = document.querySelector("#name") as HTMLInputElement;
    const emailInput = document.querySelector("#email") as HTMLInputElement;
    const photoInput = document.querySelector("#photo") as HTMLInputElement;
    const passwordInput = document.querySelector("#password") as HTMLInputElement;
    const passwordConfirmInput = document.querySelector("#password-confirm") as HTMLInputElement;

    const newUser = {
      id: Id.generate(),
      name: nameInput.value,
      email: emailInput.value,
      photo: photoInput.value,
      password: passwordInput.value
    }

    passwordInput.value === passwordConfirmInput.value
      ?
      (
        await saveUser(newUser),
        alert("Usuário Cadastrado"),
        passwordInput.value = "",
        passwordConfirmInput.value = ""
      )
      :
      (
        alert("Senhas não conferem"),
        nameInput.value = "",
        emailInput.value = "",
        photoInput.value = "",
        passwordInput.value = "",
        passwordConfirmInput.value = ""
      )
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col h-80 justify-evenly">
        <h1 className="text-white text-center font-bold text-2xl">Rocket Finanças</h1>
        <h4 className="text-slate-400 text-center">Faça seu cadastro</h4>
        <form action="" className="flex flex-col">
          <input type="text" id="name" placeholder="Nome Completo" required className="mb-2 pl-2" />
          <input type="email" id="email" placeholder="Email" required className="mb-2 pl-2" />
          <input type="file" id="photo" accept="image/jpeg, image/png" className="text-white" />
          <input type="password" id="password" placeholder="Nova Senha" required className="mb-2 pl-2" />
          <input type="password" id="password-confirm" placeholder="Confirme Sua Senha" required className="mb-2 pl-2" />
          <input type="submit" value="Cadastrar" className="bg-slate-800 text-white py-2 px-2 rounded cursor-pointer mb-2" onClick={(e) => userSignUp(e)} />
          <Link href="/" className="bg-red-800 text-white text-center py-2 px-2 rounded">Cancelar</Link>
        </form>
      </div>
    </main>
  )
}