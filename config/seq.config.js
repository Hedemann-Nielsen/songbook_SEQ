import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const database = new Sequelize(
	process.env.DBNAME,
	process.env.DBUSER,
	process.env.DBPASSWORD,
	{
		host: process.env.DBHOST,
		port: process.env.DBPORT,
		dialect: "mysql",
	}
);

export default database;
