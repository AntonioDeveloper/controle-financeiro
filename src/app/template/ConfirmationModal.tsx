import CloseEditionBtn from "./CloseEditionBtn";

interface ConfirmationModalProps {
  setOpenEdition: () => void
  setOpenConfirmationModal?: () => void
  openEdition: boolean
  openConfirmationModal?: boolean
}

export default function ConfirmationModal(props: ConfirmationModalProps) {
  //console.log("Close BTN", props.openEdition)
  return (
    <>
      {
        props.openEdition === true
          ?
          <div className={"bg-black text-white"}>
            Teste
            <CloseEditionBtn setOpenEdition={props.setOpenEdition} openEdition={props.openEdition} openConfirmationModal={props.openConfirmationModal} setOpenConfirmationModal={props.setOpenConfirmationModal} />
          </div>
          :
          ""
      }
    </>
  )
}