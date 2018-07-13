# Bamazon - Online Marketplace App

## Node & SQL Project

This is a project utilizing Node.js and SQL databases to recreate an online shopping store.

At initialization, the program displays a table of current items available to purchase

    * Item ID
    * Product Name
    * Department Name for product
    * Price of product
    * Quantity currently available for product

![Start Screen](/assets/start-screen.PNG)

User is prompted to enter an **ID** based off the table that is displayed. 
Once the ID is entered, the program will display the chosen product in its own table.

![Product Screen](/assets/find-prod-screen.PNG)


Then the user will be asked how many **unit(s)** of the item they would like to purchase.

If the quantity entered is larger than current available stock, there will be an error message displayed. 

![Error Screen](/assets/qty-error-screen.PNG)

Otherwise, the program will display a purchase screen showing the **total cost** and **remaining stock** available.

![Error Screen](/assets/purchase-screen.PNG)

Finally, the user will see an updated table with the **new stock quantity**. Application will then end at this point.

![Updated](/assets/updated-qty-screen.PNG)

