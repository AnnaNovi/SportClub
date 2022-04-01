import { clientsList, trainersList, groupsList } from "../../../typescript/main";
import { setModalAction } from "../../../store/modalReducer";
import { useDispatch } from "react-redux";
import './TableItem.css'



function TableItem({tableRow, tableBodies, requestTo}: {tableRow: (clientsList | trainersList | groupsList), tableBodies:string[], requestTo:string}) {
  const dispatch = useDispatch();

  function handleBtnModal(tableData: string, tableRow: any) {
    const data = {
      modalOpenState: true,
      modalAction: 'info',
      modalActionDetail: (tableData === "idCardForModal") ? 'infoAboutCard' : (tableData === "groupNameForModal") ? 'infoAboutGroup' : (tableData === "students") ? 'infoAboutStudents' : 'info',
      modalPerson: requestTo,
      modalData: (tableData === "idCardForModal") ? tableRow.idCardForModal : (tableData === "groupNameForModal" || tableData === "students") ? tableRow.idGroup : 1
    }
    dispatch(setModalAction(data));
    return;
  }

  const tableBodiesData = tableBodies.map((data:any, index: number) => {
    const tableDataBtnModal = (data === "idCardForModal" || data === "groupNameForModal" || data === "students");
    //@ts-expect-error
    return <td className={(tableDataBtnModal) ? "TableItemData TableItemDataLink" : "TableItemData"} onClick={() => (tableDataBtnModal) ? handleBtnModal(data, tableRow) : undefined} key={index}>{tableRow[data]}</td>
  })
  return ( 
    <tr className="TableItem">
      {tableBodiesData}
    </tr>
  );
}

export default TableItem;