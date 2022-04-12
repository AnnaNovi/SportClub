import Table from "../Table/Table";
import ButtonsList from "../ButtonsList/ButtonsList";

function TrainersList() {

  const tableHeaders = ["Фамилия", "Имя", "Отчество", "Телефон", "Группа"];
  const tableBodies = ["personSurname", "personName", "personPatronymic", "personPhone", "groupNameForModal"];

  return ( 
    <div className="TrainersList tableWrapper">
      <ButtonsList format={'TrainersList'}/>
      <Table tableHeaders = {tableHeaders} tableBodies = {tableBodies} requestTo = {'trainers'}/>
    </div>
    
  );
}

export default TrainersList;