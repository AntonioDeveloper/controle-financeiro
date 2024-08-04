import { useContext } from "react";
import HomeButton from "./HomeButton";
import UserAvatarButton from "./UserAvatarButton";
import { GeneralContext } from "../context/context";

export default function MainMenu() {

  // const { loggedUser, setLoggedUser } = useContext(GeneralContext);

  // console.log("LOG USER AVATAR", loggedUser);

  return (
    <aside className="w-1/12 h-screen flex flex-col justify-between bg-slate-800">
      <HomeButton />
      <UserAvatarButton />
    </aside>
  )
}