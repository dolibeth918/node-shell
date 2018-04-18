const commands = require('./commands.js');

process.stdout.write('prompt > ');

const done = function(output) {
  process.stdout.write(output + '\n');
  process.stdout.write('prompt > ');
}

process.stdin.on('data', function (data){
  let result = data.toString().trim();
  execute(result);
});

function execute(result){
  let command = result;
  let content;

  for (let i = 0; i < result.length; i++){
    if (result[i] === ' ') {
      command = result.slice(0, i);
      content = result.slice(i + 1);
      break;
    }
  }
  if (commands[command]) commands[command](content, done);
 }
