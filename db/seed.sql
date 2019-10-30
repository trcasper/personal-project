CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR (75),
    password VARCHAR (75)
    );
    
    INSERT INTO users (username, password)
    VALUES ('test_user', 'password');