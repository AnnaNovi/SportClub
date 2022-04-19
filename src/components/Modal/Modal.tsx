import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ModalAdd from "./ModalAdd/ModalAdd";
import ModalInfo from "./ModalInfo/ModalInfo";


function Modal() {

  const modalType = useSelector((state: RootState) => state.modal);
  const modalComponent = () => {
    switch(modalType.modalAction) {
      case 'info':
        return <ModalInfo />;
      case 'add': 
        return <ModalAdd />;
    }
  }
  

  return ( <>
    {modalComponent()}
  </>
  );
}

export default Modal;