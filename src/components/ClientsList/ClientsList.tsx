import Table from "../Table/Table";


function ClientsList() {

  const tableHeaders = ["Фамилия", "Имя", "Отчество", "Телефон", "№ абонемента"];
  const tableBodies = ["personSurname", "personName", "personPatronymic", "personPhone", "idCard"];
  
  return ( 
    <div className="ClientsList tableWrapper">
      <h1>Clients List</h1>
      <Table tableHeaders = {tableHeaders} tableBodies = {tableBodies} requestTo = {'clients'}/>
    </div>
  );
}

export default ClientsList;