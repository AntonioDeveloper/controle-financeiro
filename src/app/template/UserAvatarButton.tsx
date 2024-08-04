import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";

export default function UserAvatarButton() {

  const loggedUser = localStorage.getItem("Logged User");
  let userAvatar = "";
  let userName = "";

  if (loggedUser) {
    userAvatar = JSON.parse(loggedUser).photo;
    userName = JSON.parse(loggedUser).name;
    console.log(JSON.parse(loggedUser));
  }

  return (
    <Link href="/" className="w-full h-[100px] flex justify-center items-center text-white">{loggedUser ? <img src={userAvatar} alt={userName} /> : <IconUserCircle stroke={2} />}</Link>
  )
}