# Your Inventory Manager

This tool enables simplified visibility of household products, inspired by the need to reduce household waste & reducing costs of consumables.  
Get visibility on your product quantities, set stock alerts and track consumption over time.

## The Techy Bit

| Technology  | Purpose                               |
| ----------- | ------------------------------------- |
| React.js    | Frontend Rendering (Library)          |
| Express.js  | Frontend-Backend Interfacing API      |
| Node.js     | Backend Handling                      |
| Passport.js | Authentication Handling               |
| PostgreSQL  | Relational Database Management System |
| Docker      | Project Containerization              |
| ESLint      | JavaScript Linter                     |
| Yarn        | Package Manager                       |

## Docker

### Running the compose services

The project has been divided into separate docker services, the frontend (react-ui), express api (express-api) and postgreSQL database (postgres).  
All of these can be started with the command: `docker compose up`  

### Accessing the postgreSQL database  

If only wanting to start the database you can run the command: `docker compose up postgres` (note that this is not dependent upon the other services and so is able to run alone.)  

- Create  bash session within the postgres container: `docker exec -it postgres /bin/bash`  
- Login to the local db with default credentials: `psql -U postgres`  
