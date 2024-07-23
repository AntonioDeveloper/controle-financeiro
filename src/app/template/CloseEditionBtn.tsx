interface CloseEditionBtnProps {
  setOpenEdition: () => void
  setOpenConfirmationModal?: () => void
  openEdition: boolean
  openConfirmationModal?: boolean
}

export default function CloseEditionBtn(props: CloseEditionBtnProps) {
  return (
    <button className="px-4 py-1 rounded bg-slate-600 absolute right-2.5" onClick={() => {
      props.setOpenEdition();
      if (props.setOpenConfirmationModal !== undefined) {
        props.setOpenConfirmationModal();
      } else {
        props.setOpenEdition();
      }
    }}>{props.openEdition === false ? "Editar" : "Fechar edição"}</button>
  );
}