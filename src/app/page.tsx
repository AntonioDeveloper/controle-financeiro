import Link from "next/link";

export default function Login() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col h-80 justify-evenly">
        <h1 className="text-white text-center font-bold text-2xl">Rocket Finanças</h1>
        <form action="" className="flex flex-col">
          <input type="email" placeholder="Email" required className="mb-2 pl-2" />
          <input type="password" placeholder="Senha" required className="mb-2 pl-2" />
          <Link href="/pages/home" className="bg-slate-800 text-white text-center py-2 px-2 rounded cursor-pointer">Entrar</Link>
        </form>
        <p className="text-white">
          Não tem cadastro? <Link href="/pages/signup">clique aqui</Link>
        </p>
      </div>
    </main>
  )
}