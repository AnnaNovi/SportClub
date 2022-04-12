import { useDispatch } from "react-redux";
import { setModalAction } from "../../../store/modalReducer";


function ActionButton({format, action}: {format: string, action: string}) {
  let actionWith = '';
  let actionWithDetail = ''
  const dispatch = useDispatch();

  switch(format) {
    case 'ClientsList':
      actionWith = 'клиента';
      actionWithDetail = 'Client';
      break;
    case 'TrainersList':
      actionWith = 'тренера';
      actionWithDetail = 'Trainer';
      break;
    case 'GroupsList':
      actionWith = 'группу';
      actionWithDetail = 'Group';
      break;
    default:
      actionWith = '';
      break;
  }

  function showModal(action: string){
    const data = {
      modalOpenState: true,
      modalAction: action,
      modalActionDetail: action + actionWithDetail,
    }
    dispatch(setModalAction(data));
    return;
  }

  return ( 
    <button className="ActionButton" onClick={() => showModal(action)}>
      {(action === 'add') && 'Добавить' + ' ' + actionWith}
      {(action === 'edit') && 'Редактировать' + ' ' + actionWith}
      {(action === 'remove') && 'Удалить' + ' ' + actionWith}
    </button>
  );
}

export default ActionButton;