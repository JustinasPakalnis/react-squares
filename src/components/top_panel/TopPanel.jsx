import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function TopPanel() {
  const { column, row, addRow, addColumn, remoweColumn, remoweRow } =
    useContext(GlobalContext);

  return (
    <div>
      TOP PANEL
      <button onClick={addRow}>+</button>
      <p>{row}</p>
      <button onClick={remoweRow}>-</button>
    </div>
  );
}
