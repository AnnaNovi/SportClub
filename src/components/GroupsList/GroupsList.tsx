import Table from "../Table/Table";


function GroupsList() {

  const tableHeaders = ["Группа", "Вид спорта", "Возростная группа", "Зал", "Тренер", "Ученики"];
  const tableBodies = ["groupName", "sportKind", "ageKind", "hallKind", "trainer", "students"];
  
  return ( 
    <div className="GroupsList tableWrapper">
      <Table tableHeaders = {tableHeaders} tableBodies = {tableBodies} requestTo = {'groups'}/>
    </div>
  );
}

export default GroupsList;