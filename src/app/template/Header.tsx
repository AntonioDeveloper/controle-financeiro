import { useContext } from "react";
import AddNewRegister from "./AddNewRegister";
import Filter from "./Filter";
import { GeneralContext } from "../context/context";


interface Header {
  titulo?: string;
  activate: boolean;
  toggleActive: () => void;
}

export default function Header(props: Header) {

  const { registers } = useContext(GeneralContext);

  return (
    <header className="w-full h-1/6 flex justify-center">
      <div className="flex flex-col w-2/5 justify-center">
        <h1 className="text-white text-2xl font-bold">
          {props.titulo}
        </h1>
        <h4 className="font-thin text-slate-400">{`Você possui ${registers.length} notificações`}</h4>
      </div>
      <div className="w-1/4 flex items-center justify-around">
        <Filter />
        <AddNewRegister activate={props.activate} toggleActive={props.toggleActive} />
      </div>
    </header>
  )
}