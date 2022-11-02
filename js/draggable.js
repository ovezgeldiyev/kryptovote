const MyTables = document.querySelectorAll(".table");
const draggableTable = (table) => {
  table.style = "position:relative;";

  let rows = table.querySelectorAll("tr");
  let dragginElement = null;
  let draggingRowIndex = null;
  let copyItem = null;
  const mouseDownHandler = (event, row) => {
    if (copyItem) copyItem.remove();
    dragginElement = row;
    dragginElement.classList.add("shadow");
    position = [event.clientX, event.clientY];
    copyItem = createCopy(row);
    positionItem(event);
    // Attach the listeners to `document`
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = (event) => {
    positionItem(event);
    let target = null;

    for (let index = 0; index < rows.length; index++) {
      const element = rows[index];
      if (element.contains(event.target) || element === event.target) {
        target = element;
        break;
      }
    }

    if (target) swapItems(target, dragginElement);
  };

  const mouseUpHandler = (event) => {
    copyItem.remove();
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
    dragginElement.classList.remove("shadow");
  };

  const positionItem = (event) => {
    const tablePosition = table.getBoundingClientRect();

    copyItem.style.position = "absolute";
    copyItem.style.top = `${event.clientY - tablePosition.top}px`;
    copyItem.style.left = `${event.clientX - tablePosition.left}px`;
  };

  const createCopy = (row) => {
    var crt = document.createElement("tr");
    crt.classList.add("dragging");
    crt.style.pointerEvents = `none`;

    const cells = toArray(row.children);
    cells.forEach((cell) => {
      const newCell = cell.cloneNode(true);
      newCell.style.width = `${parseInt(
        window.getComputedStyle(cell).width
      )}px`;
      crt.appendChild(newCell);
    });
    crt.style.position = "absolute";
    table.getElementsByTagName("tbody")[0].appendChild(crt);
    return crt;
  };

  const swapItems = (item1, item2) => {
    if (getIndex(rows, item1) >= rows.length - 2) {
      table.getElementsByTagName("tbody")[0].appendChild(item2);
    } else {
      table.getElementsByTagName("tbody")[0].insertBefore(item2, item1);
    }
    rows = table.querySelectorAll("tr");
  };

  rows.forEach((row) => {
    const firstCell = row.firstElementChild;
    firstCell.classList.add("draggable");
    firstCell.addEventListener("mousedown", (e) => mouseDownHandler(e, row));
  });

  const toArray = (list) => [].slice.call(list);
  const getIndex = (list, item) => toArray(list).indexOf(item);
};
MyTables.forEach((table) => {
  draggableTable(table);
});

const questionItems = document.querySelectorAll(".questionItem");

questionItems.forEach((questionItem) => {
  const addBtn = questionItem.querySelectorAll(".button.primary")[0];
  const addBtn2 = questionItem.querySelectorAll(".button.primary")[1];
  const myTable = questionItem.querySelector(".questionItem__content-table");

  if (addBtn) {
    const table = questionItem.querySelector(".table");
    
    addBtn.addEventListener("click", () => {
      myTable.classList.add("active");
      addBtn2.classList.remove("disabled");
      draggableTable(table);
    });
  }
});
