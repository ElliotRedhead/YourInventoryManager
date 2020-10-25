require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = process.env.DATABASE_URL ? new Sequelize(
  process.env.DATABASE_URL,
  {
      dialect: 'postgres',
      dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
        }
      }
    }
  ) : new Sequelize(
    "postgres",
    "password",
    {
      host:'localhost',
      port:5432,
      dialect:"postgres",
      dialectOptions: {
        ssl: process.env.DB_SSL == "true"
      }
    }
  )
                            

const Person = sequelize.define('Person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = {
  sequelize: sequelize,
  Person: Person
};