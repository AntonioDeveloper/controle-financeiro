import ContextProvider from "../context/context";
import useToggle from "../hooks/useToggle";
import Content from "./Content";
import Header from "./Header";
import MainMenu from "./MainMenu";
import ModalNewRegister from "./ModalNewRegister";
import { createContext, useState } from "react";

interface PaginaProps {
  titulo: string;
  descricao?: string;
  children?: any;
  className?: any;
  menu?: any;
}

export default function Pagina(props: PaginaProps) {

  const [activate, toggleActive] = useToggle(false)

  return (
    <main
      className="w-screen h-screen flex"
    >
      <ContextProvider>
        <MainMenu />
        <Content titulo={props.titulo} >
          <Header titulo={props.titulo} activate={activate} toggleActive={toggleActive} />
          {props.children}
          {
            activate === true
              ?
              <ModalNewRegister activate={activate} toggleActive={toggleActive} />
              :
              ""
          }
        </Content>
      </ContextProvider>
    </main>
  )
}