-- get a table: customers to track  -
-- - revenue with different years
-- find all customer who had revenue in the 2020
-- output: returns only the customer_id
-- example  customer_id: 1, 3,

select customer_id from customers 
    where "year" = '2020'
    and "revenue" > 0;
