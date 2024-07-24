import CloseEditionBtn from "./CloseEditionBtn";

interface ConfirmationModalProps {
  setOpenEdition: () => void
  setOpenConfirmationModal?: () => void
  openEdition: boolean
  openConfirmationModal?: boolean
}

export default function ConfirmationModal(props: ConfirmationModalProps) {

  const confirmationModal = true;
  return (
    <>
      {
        props.openEdition === true
          ?
          <div className="w-full h-full z-10 bg-black/50 absolute top-0 left-0">
            <div className={"bg-white text-black z-20 absolute w-2/4 top-1/4 left-1/4 h-28 flex justify-center rounded-lg p-2"}>
              Cadastro Alterado com Sucesso!
              <CloseEditionBtn setOpenEdition={props.setOpenEdition} openEdition={props.openEdition} openConfirmationModal={props.openConfirmationModal} setOpenConfirmationModal={props.setOpenConfirmationModal} confirmationModal={confirmationModal} />
            </div>
          </div>
          :
          ""
      }
    </>
  )
}