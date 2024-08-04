"use client"

import findUserByEmail from "@/backend/casos-uso/findUserByEmail";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  async function findUser() {

    const emailnput = document.querySelector("#email") as HTMLInputElement;
    const passwordInput = document.querySelector("#password") as HTMLInputElement;

    const foundUser = await findUserByEmail(emailnput.value, passwordInput.value);

    if (foundUser) {
      router.push("/pages/home");
    } else {
      alert("Usuário não encontrado")
    }

    console.log("USER", foundUser)
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col h-80 justify-evenly">
        <h1 className="text-white text-center font-bold text-2xl">Rocket Finanças</h1>
        <form action="" className="flex flex-col">
          <input type="email" id="email" placeholder="Email" required className="mb-2 pl-2" />
          <input type="password" id="password" placeholder="Senha" required className="mb-2 pl-2" />
          <button className="bg-slate-800 text-white text-center py-2 px-2 rounded cursor-pointer" onClick={(e: any) => {
            e.preventDefault();
            findUser();
          }}>Entrar</button>
          {/* <Link href="/pages/home" className="bg-slate-800 text-white text-center py-2 px-2 rounded cursor-pointer">Entrar</Link> */}
        </form>
        <p className="text-white">
          Não tem cadastro? <Link href="/pages/signup">clique aqui</Link>
        </p>
      </div>
    </main>
  )
}