import express from "express";
import sequelize from "../config/seq.config.js";
const router = express.Router();

router.get("/", (req, res) => {
	(async () => {
		try {
			await sequelize.authenticate();
			console.log("Der er forbindelse til databasen");
		} catch (error) {
			console.error(`Fejl! Kunne ikke forbinde til databasen: ${error}`);
		}
	})();
});

export { router as MainRouter };
