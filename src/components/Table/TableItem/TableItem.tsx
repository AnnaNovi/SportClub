import { clientsList } from "../../../../typescript/main";
import './TableItem.css'


function TableItem({tableRow, tableBodies}: {tableRow: clientsList, tableBodies:string[]}) {
  const tableBodiesData = tableBodies.map((data:any, index: number) => {
    //@ts-expect-error
    return <td className={(data === "idCard" || data === "groupName") ? "TableItemData TableItemDataLink" : "TableItemData"} key={index}>{tableRow[data]}</td>
  })
  return ( 
    <tr className="TableItem">
      {tableBodiesData}
    </tr>
  );
}

export default TableItem;