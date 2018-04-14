function gridCopy1() {
  var loadtype = $("#loadtype").val();
  var Url2 = document.getElementById("biao1");
  var html = "";
  var def = "";
  var gridId = [];
  console.log("columnDefs====");
  console.log(columnDefs);
  for (var h = 0; h < columnDefs.length; h++) {
    def += columnDefs[h].headerName + "\t";
    gridId.push(columnDefs[h].field)
  }
  html += def + "\r\n";
  if (loadtype == "jx") {
    for (var i = 0; i < rowData.length; i++) {
      var rowhtml = "";
      for (var j = 0; j < gridId.length; j++) {
        var item = rowData[i][gridId[j]];
        var index = comName.indexOf(gridId[j]);
        if (index > -1) {
          item = (!item) ? " " : parseFloat(item).toString();
        } else {
          item = (!item) ? " " : item;
        }
        rowhtml += item + "\t";
      }
      html += rowhtml + "\r\n";
    }
  } else {
    for (var i = 0; i < rowData.length; i++) {
      for (k = 0; k < rowData[i].length; k++) {
        var rowhtml = "";
        for (var j = 0; j < gridId.length; j++) {
          var item = rowData[i][k][gridId[j]];
          var index = comName.indexOf(gridId[j]);
          if (index > -1) {
            item = (!item) ? " " : parseFloat(item).toString();
          } else {
            item = (!item) ? " " : item;
          }
          rowhtml += item + "\t";
        }
        html += rowhtml + "\r\n";
      }
    }
  }
  $("#biao1").html(html);
  Url2.select();
  document.execCommand("Copy");
  console.log("已复制好，可贴粘");
}