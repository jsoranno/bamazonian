var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "rsl7sn8bro1pqf5w",
    password: "jgyzqodd0qael81m",
    database: "f0yv6chbblwd6olh"

});

// connection.connect(function(err){
//     if(err)
//     {
//         throw err;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// connection.query('SELECT * FROM products', function (err, res){
//     if (err) throw err;
//     console.log(res);
// });

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

var runSearch = function() {
    inquirer.prompt({
        name: "action",
        type: "input",
        message: "What is the ID number of the product you'd like to buy?",
    }).then(function(answer) {
        var query = 'SELECT * FROM products WHERE ?'
        connection.query(query, {ItemID: answer.ItemID}, function(err, res) {
                console.log(res);
            //runQuanity();
        });
    });
};

// var runQuanity = function() {
//     inquirer.prompt({
//         name: "many",
//         type: ""
//     })
// }