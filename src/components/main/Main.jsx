import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function Main() {
  const { column, row, addRow, addColumn, remoweColumn, remoweRow } =
    useContext(GlobalContext);

  return <main>labadein</main>;
}
