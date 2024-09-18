import { createContext, useEffect, useState } from "react";
export const initialContext = {
  row: 12,
  column: 12,
  addRow: () => {},
  addColumn: () => {},
  remoweRow: () => {},
  remoweColumn: () => {},
};
export const GlobalContext = createContext(initialContext);

// function initialStateValue(localStorageKey, defaultValue) {
//   const localData = localStorage.getItem(localStorageKey);

//   if (localData) {
//     try {
//       const data = JSON.parse(localData);
//       return data;
//     } catch (error) {
//       console.log("error marderfaka");
//     }
//   }
//   return defaultValue;
// }

export function ContextWrapper(props) {
  const [row, setRow] = useState(initialContext.row);
  const [column, setColumn] = useState(initialContext.column);

  function addRow() {
    setRow(row + 1);
  }
  function addColumn() {
    setColumn(column + 1);
  }
  function remoweRow() {
    setRow(row - 1);
  }
  function remoweColumn() {
    setColumn(column - 1);
  }

  // localStorage.setItem(
  //   "51gr_todo",
  //   JSON.stringify([...tasks, { id: taskId + 1, text, deadline, color }])
  // );

  const value = {
    row,
    column,
    addRow,
    addColumn,
    remoweRow,
    remoweColumn,
  };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
