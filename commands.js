const fs = require('fs');
let request = require('request');

const filepath = __dirname;

module.exports = {
  pwd: function(filename, done){
    let result = filepath;
    done(result);
  },
  ls: function(filename, done){
    fs.readdir(filepath, function(err, files){
      if (err) throw err;
      let result = '';
      for (let i = 0; i < files.length; i++){
        result += files[i] + '     ';
      }
      done(result);
    })
  },
  //need to write a function to process echo!
  echo: function(content, done) {
    done(content);
  },
  cat: function(filename, done) {
    fs.readFile(filename, function(err, data){
      if (err) throw err;
      data = data.toString();
      done(data);
    });
  },
  head: function(filename, done) {
    fs.readFile(filename, 'utf8', function(err, data){
      if (err) throw err;
      let result = data.split('\n').slice(0, 5).join('\n')
      done(result);
    })
  },
  tail: function(filename, done) {
    fs.readFile(filename, 'utf8', function(err, data){
      if (err) throw err;
      let result = data.split('\n').slice(-5).join('\n');
      done(result);
    })
  },
  curl: function(url, done) {
    request(url, function(err, response, body){
      if (err) throw err;
      done(body);
    });
  }
}
