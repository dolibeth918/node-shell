let commands = require('./commands.js');

process.stdout.write('prompt > ');

var done = function(output) {
  process.stdout.write(output + '\n');
  process.stdout.write('prompt > ');
}

process.stdin.on('data', function (data){
  let result = data.toString().trim();

  let command = result;
  let content;

  for (let i = 0; i < result.length; i++){
    if (result[i] === ' ') {
      command = result.slice(0, i);
      content = result.slice(i + 1);
      break;
    }
  }

  if (command === 'curl'){
    commands.curl(content, done);
  }

  if (command === 'tail'){
    commands.tail(content, done);
  }

  if (command === 'head'){
    commands.head(content, done);
  }

  if (command === 'cat'){
    commands.cat(content, done);
  }

  if (command === 'echo'){
    commands.echo(content, done);
  }

  if (command === 'pwd'){
    commands.pwd(done);
  }

  if (command === 'date'){
    let date = new Date().toString();
    process.stdout.write(date + '\n');
    process.stdout.write('prompt > ');
  }

  if (command === 'ls'){
    commands.ls(done);
  }
});

