import mysql from "mysql" 
var connectionString = "--identical-to-below--"
var source = "mysql://Kim:Yeonkoung@127.0.0.1/grand_condo"
var connection = mysql.createConnection(source)
connection.query("select * from category", show)

function show(error, data) {
  console.log(data)
  connection.end()
  process.exit()
}
