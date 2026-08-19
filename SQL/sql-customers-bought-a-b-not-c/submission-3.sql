-- customers: customer_id, customer_id
-- orders: order_id, customer_id,product_name
-- find customers who purchased both products A and B
-- but have never puurchased product C
-- return customer_id and customer_name and ordered by customer_name

select c.customer_id, c.customer_name
from customers c
left join orders o on c.customer_id = o.customer_id
group by c.customer_id, c.customer_name
having sum(case when product_name = 'A' then 1 else 0 end) > 0
and sum(case when product_name = 'B' then 1 else 0 end) > 0
and sum(case when product_name = 'C' then 1 else 0 end) = 0
order by customer_name 
;