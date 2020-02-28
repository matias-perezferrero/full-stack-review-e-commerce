insert into carts(user_id, product_id, qty)
VALUES(${user_id}, ${product_id}, 1);

select * from carts
join products on carts.product_id = products.product_id
where user_id = ${user_id};