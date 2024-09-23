import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SidePanel } from "../side_panel/SidePanel";
import { TopPanel } from "../top_panel/TopPanel";

export function Main() {
  const { column, row } = useContext(GlobalContext);
  const [blockClasses, setBlockClasses] = useState([]);
  let [count, setCount] = useState(0);
  useEffect(() => {
    setBlockClasses(Array(row).fill(Array(column).fill("block")));
  }, [row, column]);

  // console.log(blockClasses);

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
  console.log(">>>>>>>", blockClasses);

  useEffect(() => {
    const totalChecked = blockClasses
      .flat()
      .filter((block) => block === "blockChecked").length;
    setCount(totalChecked);
  }, [blockClasses]);

  console.log(count);

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
              >
                <p>{count}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
