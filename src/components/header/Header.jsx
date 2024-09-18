import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function Header() {
  const { column, row, addRow, addColumn, remoweColumn, remoweRow } =
    useContext(GlobalContext);

  return <header>HEADER SUMMARY</header>;
}
