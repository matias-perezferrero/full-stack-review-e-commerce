select * from carts
join products on carts.product_id = products.product_id
where user_id = $1;