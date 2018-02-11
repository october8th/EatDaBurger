// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-05.cleardb.net',
  user     : 'bc44995cd15126',
  password : 'cbcb375c',
  database : 'heroku_5cea6047457626e'
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
