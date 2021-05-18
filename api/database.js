require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = process.env.DATABASE_URL ? new Sequelize(
	process.env.DATABASE_URL,
	{
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false
			}
		}
	}
) : new Sequelize(
	process.env.DB_SCHEMA || "postgres",
	process.env.DB_USER || "postgres",
	process.env.DB_PASSWORD || "password",
	{
		host:process.env.DB_HOST || "localhost",
		port:process.env.DB_PORT || 5432,
		dialect:"postgres",
		dialectOptions: {
			ssl: process.env.DB_SSL == "true",
		}
	}
);

                            
const User = sequelize.define("user", {
	username: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: true
	}
});


const Product = sequelize.define("product", {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	quantity: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	expiryDate: {
		type: Sequelize.DATEONLY,
		allowNull: true
	},
	storageLocation: {
		type: Sequelize.STRING,
		allowNull: false
	},
	freezable: {
		type: Sequelize.BOOLEAN,
		default: false,
		allowNull: false
	}
});


User.hasMany(Product, {
	foreignKey: {
		name: "user.id",
		allowNull: true
	}
});

module.exports = {
	sequelize: sequelize,
	User: User,
	Product: Product
};