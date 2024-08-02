import saveUser from "@/backend/casos-uso/save-user";
import Register from "./Register";

export default function RegistersTable() {

  async function click() {
    await saveUser({
      id: "7161625s",
      name: "Antonio",
      email: "antonio.junior@hotmail.com",
      photo: "hshsshdbb",
      password: "hueyhhffh"
    });
  }

  return (
    <div className="flex justify-center">
      <button onClick={click} className="text-white">TESTE</button>
      <Register />
    </div>
  )
}