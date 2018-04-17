var fs = require('fs');

var filepath = process.argv[1].toString().slice(0, -8);

module.exports = {
  pwd: function(){
    process.stdout.write(filepath + '\n');
    process.stdout.write('prompt > ');
  },
  ls: function(){
    fs.readdir(filepath, function(err, files){
      if (err) throw err;
        files.forEach(file => console.log(file));
        process.stdout.write('prompt > ');
    })
  }
}
