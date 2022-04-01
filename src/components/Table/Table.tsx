import TableItem from "./TableItem/TableItem";
import './Table.css'
import { useEffect, useState } from "react";
import { clientsList, trainersList, groupsList, paymentList } from "../../typescript/main";


function Table({tableHeaders, tableBodies, requestTo}: {tableHeaders:string[], tableBodies:string[], requestTo:string}) {

  const [dataClients, setDataClients] = useState<clientsList[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3001/data/${requestTo}`)
    .then(response => response.json())
    .then(data => setDataClients([...data]));
  }, []);
  
  const createTHead = tableHeaders.map((tableHeadersItem:string) => {
    return <th className="tableHeader">{tableHeadersItem}</th>
  })
  const createTBody = dataClients.map((dataItem: (clientsList | trainersList | groupsList | paymentList), index: number) => {
    return <TableItem key={index} tableBodies={tableBodies} tableRow = {dataItem} requestTo = {requestTo}/>
  })
  
  return ( 
    <table className="Table">
      <thead>{createTHead}</thead>
      <tbody>{createTBody}</tbody>
    </table>
  );
}

export default Table;