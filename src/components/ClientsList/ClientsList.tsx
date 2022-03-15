import Table from "../Table/Table";


function ClientsList() {

  const tableHeaders = ["Фамилия", "Имя", "Отчество", "Телефон", "№ абонемента"];
  const tableBodies = ["personSurname", "personName", "personPatronymic", "personPhone", "idCardForModal"];
  
  return ( 
    <div className="ClientsList tableWrapper">
      <Table tableHeaders = {tableHeaders} tableBodies = {tableBodies} requestTo = {'clients'}/>
    </div>
  );
}

export default ClientsList;