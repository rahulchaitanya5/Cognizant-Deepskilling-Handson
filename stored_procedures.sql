--Scenario 1: The bank needs to process monthly interest for all savings accounts.
create or replace PROCEDURE ProcessMonthlyInterest
is 
begin
    update accounts set balance=balance+(balance*1/100) where accounttype='Savings';
    commit;
end;
/

--Scenario 2: The bank wants to implement a bonus scheme for employees based on their performance.
create or replace procedure UpdateEmployeeBonus (p_bonus in number, p_department in varchar2(20))
is 
begin
    update EMPLOYEES set salary=salary+(salary*p_bonus/100) where department=p_department;
    commit;
end;
/

--Scenario 3: Customers should be able to transfer funds between their accounts.
create or replace procedure TransferFunds (p_sender_accountID in number, p_receiver_accountID in number, p_amount in number)
is
v_balance number;
begin
    select balance into v_balance from accounts where accountid=p_sender_accountID;
    if v_balance>=p_amount then 
        update accounts set balance=balance-p_amount where accountid=p_sender_accountID;
        update accounts set balance=balance+p_amount where accountid=p_receiver_accountID;
    else
        dbms_output.put_line('Insuficient balance');
    end if;
    commit;
end;
/