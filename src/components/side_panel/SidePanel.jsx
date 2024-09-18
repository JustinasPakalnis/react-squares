import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function SidePanel() {
  const { column, row, addRow, addColumn, remoweColumn, remoweRow } =
    useContext(GlobalContext);

  return <div>SIDE PANEL</div>;
}
