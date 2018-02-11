// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-05.cleardb.net',
  user     : 'b0783062c61251',
  password : 'd6b8a7b1',
  database : 'heroku_eb64c1c2303de9f'
});

/*var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password1',
  database : 'burgers_db'
})*/

// Make connection.
connection.connect(function(err) 
{
  if (err) 
  {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
