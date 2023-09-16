function initializeExport(listId) {
  const exportBtn = document.querySelector(".filter__more__export");
  exportBtn.addEventListener("click", () => {
    const table = document.getElementById(listId).cloneNode(true);
    table.querySelectorAll("td.menu, th.menu, td.checkbox, th.checkbox, tr.separator").forEach((td) => td.remove());
    ExportToExcel(table);
  });
}

function ExportToExcel(elt, type, fn, dl) {
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl
    ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
    : XLSX.writeFile(wb, fn || "table." + (type || "xlsx"));
}
