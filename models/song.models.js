import sequelize from "../config/seq.config.js";
import { Model, DataTypes } from "sequelize";

class Song extends Model {}

Song.init(
	{
		// Objekt med felter
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		context: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "song",
		underscored: true, // Brug underscores istedet for standarden CamelCase
		freezeTableName: true, // Brug denne hvis du vil undgå table names i flertal tabellen
		timestamps: false, // Undgå både createdAt og updatedAt felter
	}
);

export default Song;
