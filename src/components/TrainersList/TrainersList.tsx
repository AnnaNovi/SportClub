import Table from "../Table/Table"


function TrainersList() {

  const tableHeaders = ["Фамилия", "Имя", "Отчество", "Телефон", "Группа"];
  const tableBodies = ["personSurname", "personName", "personPatronymic", "personPhone", "groupNameForModal"];

  return ( 
    <div className="TrainersList tableWrapper">
      <Table tableHeaders = {tableHeaders} tableBodies = {tableBodies} requestTo = {'trainers'}/>
    </div>
    
  );
}

export default TrainersList;