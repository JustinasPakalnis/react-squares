import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SidePanel } from "../side_panel/SidePanel";
import { TopPanel } from "../top_panel/TopPanel";

export function Main() {
  const { column, row } = useContext(GlobalContext);
  const [blockClasses, setBlockClasses] = useState([]);

  useEffect(() => {
    setBlockClasses(Array(row).fill(Array(column).fill("block")));
  }, [row, column]);

  const toggleBlockClass = (rowIndex, colIndex) => {
    setBlockClasses((prevState) =>
      prevState.map((row, rIndex) =>
        row.map((block, cIndex) =>
          rIndex === rowIndex && cIndex === colIndex
            ? block === "block"
              ? "blockChecked"
              : "block"
            : block
        )
      )
    );
  };

  return (
    <main>
      <TopPanel />
      <SidePanel />
      <div className="container">
        {blockClasses.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((blockClass, colIndex) => (
              <div
                key={colIndex}
                className={blockClass}
                onClick={() => toggleBlockClass(rowIndex, colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

// import { useContext } from "react";
// import { GlobalContext } from "../../context/GlobalContext";
// import { SidePanel } from "../side_panel/SidePanel";
// import { TopPanel } from "../top_panel/TopPanel";
// import { useState } from "react";
// export function Main() {
//   const { column, row, addRow, addColumn, remoweColumn, remoweRow } =
//     useContext(GlobalContext);
//   const rowArray = Array(row).fill("x");
//   const columnArray = Array(column).fill("x");
//   console.log(rowArray);
//   console.log(columnArray);
//   const [blockClasses, setBlockClasses] = useState(
//     rowArray.map(() => columnArray.map(() => "block"))
//   );
//   console.log(blockClasses);

//   return (
//     <main>
//       <TopPanel></TopPanel>
//       <SidePanel></SidePanel>
//       <div className="container">
//         {rowArray.map((row, rowIndex) => (
//           <div key={rowIndex}>
//             {columnArray.map((column, colIndex) => (
//               <div key={colIndex} className="block">
//                 {colIndex}{rowIndex}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
