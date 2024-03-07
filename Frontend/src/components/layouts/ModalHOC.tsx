import CommonModal from "../Modal/CommonModal";
import { useAppSelector } from "@/hooks/hooks";


export default function ModalHOC() {
  const modalMessage = useAppSelector((state) => state.businessReducer.dialog);
 
  
  return (
    <div>
      {modalMessage.status && <CommonModal message={modalMessage} />}
     
    </div>
  );
}
