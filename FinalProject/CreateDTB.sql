USE nbs;
-- DROP TABLE Employees;
CREATE TABLE IF NOT EXISTS Employees (
  eno INT NOT NULL,
  ename VARCHAR(30) NOT NULL,
  esal FLOAT NOT NULL,
  edept VARCHAR(20) NOT NULL
);

INSERT INTO Employees (eno,ename,esal,eDept)
Values
(1,'Susan Rogers',5000,'HouseKeeping'),
(2,'Ben Jones',18000,'Sales'),
(3,'Mark Smith',25000,'IT')
;

-- DELETE FROM Staff WHERE Criteria = Value ;

SELECT * FROM Employees;

-- enable External Access
ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'root';