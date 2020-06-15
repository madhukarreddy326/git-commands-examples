var fs = require('fs');
 
fs.readFile('git-fetch_and_git-pull', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');