import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SidePanel } from "../side_panel/SidePanel";
import { TopPanel } from "../top_panel/TopPanel";
import { useState } from "react";
export function Main() {
  const { column, row, addRow, addColumn, remoweColumn, remoweRow } =
    useContext(GlobalContext);
  const rowArray = Array(row).fill();
  const columnArray = Array(column).fill();
  console.log(rowArray);
  console.log(columnArray);
  const [blockClass, setBlockClass] = useState("block");

  return (
    <main>
      <TopPanel></TopPanel>
      <SidePanel></SidePanel>
      <div className="container">
        {rowArray.map((div, rindex) => (
          <div key={rindex} className={blockClass}>
            {columnArray.map((div, index) => (
              <div key={index} className={blockClass}></div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
