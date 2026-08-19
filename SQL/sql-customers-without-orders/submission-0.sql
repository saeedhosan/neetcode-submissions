-- customers: id, name
-- orders: id, customer_id
-- Find all customers who have never placed an order
-- return 0 order customers with only customer names;

select name from customers where id not in (select customer_id from orders);