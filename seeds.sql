USE bamazon;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES 
(35091, 'Spiral Notebook', 'Office Supplies', 12.00, 5600),
(44910, 'Dell XPS-13', 'Laptops and Computers', 899.99, 121),
(11235, '12oz Coca-Cola Fridge Pack', 'Beverages', 7.99, 1203),
(28311, 'Plastic Straws x5000', 'Food Service', 9.99, 209),
(22194, 'God of War', 'Video Games', 59.99, 55029),
(44191, 'Adidas Ultra Boost', 'Footwear', 199.99, 215),
(25691, 'Horizon Zero Dawn', 'Video Games', 39.99, 2110),
(11293, 'Gold Stapler', 'Office Supplies', 5.99, 12921),
(33910, 'Pledge: Lemon', 'Cleaning Supplies', 4.99, 8892),
(11890, 'Family Guy: Season 4', 'DVDs', 14.99, 4401)
;

SELECT * FROM products;