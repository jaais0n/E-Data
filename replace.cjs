const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdir(dir, function(err, list) {
        if (err) return callback(err);
        var pending = list.length;
        if (!pending) return callback(null);
        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        if (!--pending) callback(null);
                    });
                } else {
                    if (file.match(/\.(tsx|ts|jsx|js|html|css|json)$/)) {
                        let content = fs.readFileSync(file, 'utf8');
                        let original = content;
                        
                        // Replace different casings and spacings
                        content = content.replace(/Gilbert\s*Data/gi, 'E-Data');
                        content = content.replace(/GilbertData/gi, 'E-Data');
                        content = content.replace(/gilbertdb\.com/gi, 'e-data.com');
                        content = content.replace(/info@gilbertdb\.com/gi, 'info@e-data.com');
                        content = content.replace(/Gilbert/gi, 'E-Data');
                        
                        // Remove the logo image tags
                        content = content.replace(/<img[^>]*src="\/images\/GDlogo\.png"[^>]*>/gi, '');
                        
                        if (content !== original) {
                            fs.writeFileSync(file, content, 'utf8');
                            console.log('Updated', file);
                        }
                    }
                    if (!--pending) callback(null);
                }
            });
        });
    });
}

walk(path.join(__dirname, 'src'), function(err) {
    if (err) console.error(err);
    console.log('done src');
});
