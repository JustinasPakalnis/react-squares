import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function TopPanel() {
  const { column, row, addRow, addColumn, remoweColumn, remoweRow } =
    useContext(GlobalContext);

  return (
    <div className="panel topPanel">
      <button onClick={remoweRow}>-</button> <p>{row}</p>
      <button onClick={addRow}>+</button>
    </div>
  );
}
