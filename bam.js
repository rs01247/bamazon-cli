const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon'
});

function displayPage() {
    console.log(`
WELCOME TO BAMAZON
        `);
    connection.query('SELECT * FROM products',
        function (err, results, fields) {
            if (err) throw err;
            console.table(results);
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the product ID of the item you are looking for?',
                    name: 'prodID'
                },
            ]).then(function (inquirerResponse) {
                const userProd = Number(inquirerResponse.prodID);

                for (i = 0; i < results.length; i++) {
                    if (userProd === results[i].item_id) {
                        const itemStock = results[i].stock_quantity;
                        const itemName = results[i].product_name;
                        const itemPrice = results[i].price;
                        console.table([
                            {
                                item: results[i].item_id,
                                product: results[i].product_name,
                                department: results[i].department_name,
                                price: results[i].price,
                                stock: results[i].stock_quantity
                            },
                        ]);
                        // NEED A FUNCTION TO RETURN 'NOT FOUND' IF USER INPUT DOES NOT EQUAL ANY OF THE ITEM_ID
                        // else if (userProd) {
                        //     console.log('Item not found');
                        // }

                        function orderGoods() {
                            inquirer.prompt([
                                {
                                    type: 'input',
                                    message: 'How many units would you like to purchase?',
                                    name: 'prodQTY'
                                },
                            ]).then(function (inquirerResponse) {
                                const userQTY = Number(inquirerResponse.prodQTY);
                                if (userQTY < itemStock) {
                                    const newStock = itemStock - userQTY;
                                    const userTotal = userQTY * itemPrice;
                                    connection.query(`
                                UPDATE products
                                SET stock_quantity = ${newStock}
                                WHERE item_id = ${userProd}
                                `, function (err, results, fields) {
                                            if (err) throw err;
                                        });
                                    console.log(`
______________________________________________________________________________

You have purchased ${userQTY} unit(s) of [${itemName}] at $${itemPrice}.
There are now ${newStock} unit(s) remaining in stock.
Your total is $${userTotal}. Thank you!
______________________________________________________________________________
`)
                                    connection.end();
                                }
                                else {
                                    console.log(`
Not enough in stock for what you have requested, try again
                                    `);
                                    // RECURSION TO START OVER IF QUANTITY ENTERED IS LESS THAN AVAILABLE
                                    orderGoods();
                                }

                            })

                        }
                        orderGoods();
                    }
                }
            });
        });
}

function startApp() {
    connection.connect(function (err) {
        if (err) throw err;
        displayPage();
    });
}

startApp();

module.exports = {
    connection: connection,
    startApp: startApp
}