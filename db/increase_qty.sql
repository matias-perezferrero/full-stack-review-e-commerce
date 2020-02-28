update carts
    set qty = qty + 1
where user_id = ${user_id} AND product_id = ${product_id};

select * from carts
join products on carts.product_id = products.product_id
where user_id = ${user_id};