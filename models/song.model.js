import database from "../config/seq.config.js";
import { Model, DataTypes } from "sequelize";

class song extends Model {}

song.init(
	{
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
		content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		artist_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		database,
		modelName: "song",
	}
);

export default song;
