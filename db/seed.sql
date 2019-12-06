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

    alter table products
    add column user_id int references users(user_id);

    INSERT INTO products (product_url, product_name, product_description, product_price)
    VALUES ('test_url', 'test_shirt', 'test_this shirt is blue', '5');



    select * from products join users on products.user_id = users.user_id


