import Table from "../Table/Table";

function Payment() {

  const tableHeaders = ["Дата", "Абонемент", "Клиент"];

  const tableBodies = ["date", "idCard", "client"];

  return ( 
    <div className="Payment tableWrapper">
      <Table tableHeaders = {tableHeaders} tableBodies = {tableBodies} requestTo = {'payment'}/>
    </div>
  );
}

export default Payment;