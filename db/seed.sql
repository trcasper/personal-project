CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR (75),
    password VARCHAR (75)
    );
    
    INSERT INTO users (username, password)
    VALUES ('test_user', 'password');


CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_url text,
    product_name VARCHAR (75),
    product_description VARCHAR (500),
    product_price int
    );

    INSERT INTO products (product_url, product_name, product_description, product_price)
    VALUES ('test_url', 'test_shirt', 'test_this shirt is blue', '5');

