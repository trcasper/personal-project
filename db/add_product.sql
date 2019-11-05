INSERT INTO products (product_url, product_name, product_description, product_price)
VALUES ($1, $2, $3, $4);

-- need to add the user_id to this 

-- //expecting an array with something in each spot

SELECT * FROM products;



-- CREATE TABLE products (
--     product_id SERIAL PRIMARY KEY,
--     product_url text,
--     product_name VARCHAR (75),
--     product_description VARCHAR (500),
--     product_price int
--     );