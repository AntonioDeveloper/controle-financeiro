import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";

export default function ConfirmationModal() {

  return (
    <div className="w-full h-full z-10 bg-black/50 absolute top-0 left-0">
      <div className={"bg-white text-black z-20 absolute w-2/4 top-1/4 left-1/4 h-28 flex justify-center rounded-lg p-2"}>
        Cadastro Excluído com Sucesso!
        <Link href="/" className="text-black w-24 flex flex-column items-center justify-evenly"><IconChevronLeft stroke={2} /> Voltar</Link>
      </div>
    </div>
  )
}