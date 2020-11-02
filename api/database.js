require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = process.env.DATABASE_URL ? new Sequelize(
	process.env.DATABASE_URL, null, null,
	{
		dialect: "postgres",
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
	process.env.DB_PASSWORD || "",
	{
		host:process.env.DB_HOST || "localhost",
		port:process.env.DB_PORT || 5432,
		dialect:"postgres",
		dialectOptions: {
			ssl: process.env.DB_SSL == "true",
		}
	}
);
                            

const Product = sequelize.define("Product", {
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

module.exports = {
	sequelize: sequelize,
	Product: Product
};