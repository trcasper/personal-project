
update products
set product_url = $2, product_name = $3, product_description = $4, product_price = $5
where product_id = $1;

select *
from products
where product_id = $1
