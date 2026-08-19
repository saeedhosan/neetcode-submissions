-- employees: employee_id, name, salary
-- calculate the bonus for each employee
-- employee get a bonus equal to 100% -
-- - for their salary if: employee_id odd and name dont start latter "M"
-- return employee_id and bonus 
-- ordered by employee_id

select 
    employee_id,
    (
        case 
            when employee_id % 2 = 1 
                and name not like 'M%'
                then salary
            else 0
        end
    ) as bonus
    from employees
    order by employee_id;