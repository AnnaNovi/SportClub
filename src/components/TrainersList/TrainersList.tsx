import Table from "../Table/Table"


function TrainersList() {

  const tableHeaders = ["Фамилия", "Имя", "Отчество", "Телефон", "Группа"];
  const tableBodies = ["personSurname", "personName", "personPatronymic", "personPhone", "groupName"];

  return ( 
    <div className="TrainersList tableWrapper">
      <h1>Trainers List</h1>
      <Table tableHeaders = {tableHeaders} tableBodies = {tableBodies} requestTo = {'trainers'}/>
    </div>
    
  );
}

export default TrainersList;