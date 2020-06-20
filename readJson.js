var fs = require('fs');
var contents =fs. readFileSync('sample.json', 'utf8');
//var myObject =JSON.parse(contents);
if(contents.hasOwnProperty('predicates')){
   console.log(true);
}
//onsole.log(true);