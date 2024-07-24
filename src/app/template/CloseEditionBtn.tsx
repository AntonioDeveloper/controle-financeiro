interface CloseEditionBtnProps {
  setOpenEdition: () => void
  setOpenConfirmationModal?: () => void
  confirmationModal?: boolean,
  openEdition: boolean
  openConfirmationModal?: boolean
}

export default function CloseEditionBtn(props: CloseEditionBtnProps) {

  const confirmationModalCloseBtnStyle = "bg-white text-black top-2/4 border-solid border-2 border-slate-300";

  return (
    <button className={`px-4 py-1 rounded ${props.confirmationModal ? confirmationModalCloseBtnStyle : " bg-slate-600 right-2.5"} absolute`} onClick={() => {
      props.setOpenEdition();
      if (props.setOpenConfirmationModal !== undefined) {
        props.setOpenConfirmationModal();
      } else {
        props.setOpenEdition();
      }
    }}>{props.openEdition === false ? "Editar" : "Fechar edição"}</button>
  );

}