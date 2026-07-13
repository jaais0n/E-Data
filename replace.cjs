const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace "Gilbert Data" ignoring case
    content = content.replace(/Gilbert\s?Data/g, "E-Data Grid");
    content = content.replace(/gilbert\s?data/g, "e-data grid");
    content = content.replace(/GILBERT\s?DATA/g, "E-DATA GRID");
    content = content.replace(/Gilbertdata/g, "E-Data Grid");
    
    // Domains/emails
    content = content.replace(/gilbertdata\.com/g, "edatagrid.com");
    content = content.replace(/gilbertdb\.com/g, "edatagrid.com");
    content = content.replace(/info@gilbertdata/g, "info@edatagrid");
    content = content.replace(/info@gilbertdb/g, "info@edatagrid");
    content = content.replace(/gilbertdata/g, "edatagrid");
    content = content.replace(/GilbertData/g, "E-Data Grid");
    
    // Revert logo alt tags if they got replaced
    content = content.replace(/alt="E-Data Grid"/g, 'alt="Gilbert Data"');
    content = content.replace(/alt="E-DATA GRID"/g, 'alt="Gilbert Data"');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
