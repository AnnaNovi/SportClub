import Table from "../Table/Table";


function GroupsList() {

  const tableHeaders = ["Группа", "Вид спорта", "Возростная группа", "Зал", "Тренер", "Ученики"];
  const tableBodies = ["groupName", "sportKind", "ageKind", "hallKind"];
  
  return ( 
    <div className="GroupsList tableWrapper">
      <h1>Clients List</h1>
      <Table tableHeaders = {tableHeaders} tableBodies = {tableBodies} requestTo = {'groups'}/>
    </div>
  );
}

export default GroupsList;