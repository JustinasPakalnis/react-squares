import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function SidePanel() {
  const { column, row, addRow, addColumn, remoweColumn, remoweRow } =
    useContext(GlobalContext);

  return (
    <div className="panel sidePanel">
      <button onClick={remoweColumn}>-</button>
      <p>{column}</p>
      <button onClick={addColumn}>+</button>
    </div>
  );
}
