import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function Header() {
  const { column, row, addRow, addColumn, remoweColumn, remoweRow } =
    useContext(GlobalContext);

  return (
    <header className="header">
      <h1 className="headerBoard">
        Plotas: {row} X {column} = {row * column} m²
      </h1>
    </header>
  );
}
