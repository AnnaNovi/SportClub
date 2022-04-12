import Table from "../Table/Table";
import ButtonsList from "../ButtonsList/ButtonsList";

function GroupsList() {

  const tableHeaders = ["Группа", "Вид спорта", "Возростная группа", "Зал", "Тренер", "Ученики"];
  const tableBodies = ["groupName", "sportKind", "ageKind", "hallKind", "trainer", "students"];
  
  return ( 
    <div className="GroupsList tableWrapper">
      <ButtonsList format={'GroupsList'}/>
      <Table tableHeaders = {tableHeaders} tableBodies = {tableBodies} requestTo = {'groups'}/>
    </div>
  );
}

export default GroupsList;