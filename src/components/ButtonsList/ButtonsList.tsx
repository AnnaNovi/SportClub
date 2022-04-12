import ActionButton from "./ActionsButton/ActionButton";
import './ButtonsList.css';

function ButtonsList({format} : {format: string}) {

  return ( 
    <div className="ButtonsList">
      <ActionButton format={format} action='add'/>
      <ActionButton format={format} action='edit'/>
      <ActionButton format={format} action='remove'/>
    </div>  
  );
}

export default ButtonsList;