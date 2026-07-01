--Scenario 1: The bank wants to apply a discount to loan interest rates for customers above 60 years old.
declare
cursor customer_cursor is
select c.customerid,c.dob from 
CUSTOMERS c join loans l on c.CUSTOMERID=l.customerid;
v_customer_id customers.CUSTOMERID%TYPE;
v_dob customers.DOB%TYPE;
v_age NUMBER;
begin 
    OPEN customer_cursor;
    LOOP
        FETCH customer_cursor into v_customer_id,v_dob;
        exit when customer_cursor%notfound;
        v_age:=floor(months_between(sysdate,v_dob)/12);
        if v_age>60 then
            update loans set interestrate=interestrate-1 where customerid=v_customer_id;
            DBMS_OUTPUT.PUT_LINE('Discount applied to Customer ID:'||v_customer_id);
        end if;
        end loop;
        close customer_cursor;
        commit;
end;
/

--Scenario 2: A customer can be promoted to VIP status based on their balance.
DECLARE
cursor customer_cursor is
select customerid,balance from CUSTOMERS;
v_customer_id customers.CUSTOMERID%TYPE;
v_balance customers.BALANCE%TYPE;
begin
    open customer_cursor;
    loop
        fetch customer_cursor into v_customer_id,v_balance;
        exit when customer_cursor%notfound;
        if v_balance>10000 then
            update CUSTOMERS set isvip='true' where CUSTOMERID=v_customer_id;
            dbms_output.put_line('Customer promoted to VIP:'||v_customer_id);
        end if;
        end loop;
        close customer_cursor;
        commit;
end;
/

--Scenario 3: The bank wants to send reminders to customers whose loans are due within the next 30 days.
DECLARE
cursor customer_cursor is
select customerid,enddate from loans;
v_customer_id loans.CUSTOMERID%TYPE;
v_enddate loans.ENDDATE%TYPE;
due NUMBER;
BEGIN
    open customer_cursor;
    loop
        FETCH customer_cursor into v_customer_id,v_enddate;
        exit when customer_cursor%notfound;
        due:=v_enddate-sysdate;
        if due>=0 and due<=30 then
            dbms_output.put_line('There is a due on loan for Customer ID:'||v_customer_id);
        end if;
        end loop;
        close customer_cursor;
end;
/