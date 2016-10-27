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
        name: "ItemID",
        type: "input",
        message: "What is the ID number of the product you'd like to buy?",
    }).then(function(answer) {
        // console.log(answer);
        var query = 'SELECT * FROM products WHERE ?';
        connection.query(query, {ItemID: answer.ItemID}, function(err, res) {
                for (var i = 0; i <res.length; i++){
                    console.log("Product: " + res[i].ProductName + " || Price: " + res[i].Price);
                    //var available = res[i].StockQuantity;
                }
            runQuantity();
        });
    });
};

var runQuantity = function () {
    inquirer.prompt({
        name: "StockQuantity",
        type: "input",
        message: "How many would you like to order?",
    }).then(function (answer) {
        //console.log(answer);
        var query = 'UPDATE people SET StockQuantity=answer, WHERE ItemID=answer.ItemID';
        connection.query(query, answer, function (err, res) {
            console.log("Great. We've placed an order for you.");
        });
    });
};