const PDFdocument = require("pdfkit");
exports.logsheet = (req, res) => {
  const doc = new PDFdocument();
  doc.pipe(res);

  //making table
  doc.lineCap("butt").moveTo(270, 90).lineTo(270, 430).stroke();
  doc.lineCap("butt").moveTo(30, 90).lineTo(30, 430).stroke();
  doc.lineCap("butt").moveTo(530, 90).lineTo(530, 430).stroke();
  doc.lineCap("butt").moveTo(30, 430).lineTo(530, 430).stroke();
  doc.lineCap("butt").moveTo(450, 500).lineTo(530, 500).stroke();
  createText(doc, "Signature", 450, 510);
  //Making the first row
  row(doc, 90);

  //Title
  textInRowFirst(doc, "Weave", 70);
  textInRowFirst(doc, "Tasks accomplished", 100);
  textInRowSecond(doc, "Tasks to be accomplished", 100);
  doc.end();
  res.writeHead(200, {
    "Content-Type": "application/pdf",
  });
};

//These are the necessary functions to create table
function textInRowFirst(doc, text, height) {
  doc.y = height;
  doc.x = 30;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: "justify",
    columns: 1,
  });
  return doc;
}

//Put text in the 2nd column
function textInRowSecond(doc, text, height) {
  doc.y = height;
  doc.x = 270;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: "justify",
    columns: 1,
  });
  return doc;
}

//Creates text at specified location
function createText(doc, text, x, y) {
  doc.y = y;
  doc.x = x;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: "justify",
    columns: 1,
  });
  return doc;
}

//Creates a row
function row(doc, height) {
  doc.lineJoin("miter").rect(30, height, 500, 20).stroke();
  return doc;
}
