# Difference between JPA, Hibernate and Spring Data JPA

## JPA
- Java Persistence API (Specification)
- Defines interfaces for ORM
- Does not provide implementation

## Hibernate
- ORM Framework
- Implements JPA
- Requires Session and Transaction management

## Spring Data JPA
- Built on top of JPA
- Uses Hibernate internally
- Reduces boilerplate code
- Automatically manages transactions
- Repository interfaces eliminate most CRUD code