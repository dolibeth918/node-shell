let commands = require('./commands.js');

process.stdout.write('prompt > ');

//if the user says "pwd", then we'll print
process.stdin.on('data', function (data){
  let result = data.toString().trim();
  if (result === 'pwd'){
    commands.pwd();
  }
  if (result === 'date'){
    let date = new Date().toString();
    process.stdout.write(date + '\n');
    process.stdout.write('prompt > ');
  }
  if (result === 'ls'){
    commands.ls();
  }
});

