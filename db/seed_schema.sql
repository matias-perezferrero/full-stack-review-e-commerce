CREATE TABLE products(
    product_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(200),
    brand VARCHAR(200),
    colorway VARCHAR(200),
    price DECIMAL,
    description VARCHAR(1350),
    year_released NUMERIC(4,0),
    image_1_url text,
    image_2_url text,
    image_3_url text,
    image_4_url text,
    category VARCHAR(50)
);

create table users (
    user_id serial primary key,
    user_email varchar(100),
    user_password varchar(250)
);

create table carts (
    cart_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    product_id INT REFERENCES products(product_id),
    qty INT
)