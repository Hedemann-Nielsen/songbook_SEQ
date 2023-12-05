import Song from "../models/song.models.js";

export default class SongController {
	constructor() {
		console.log("SongController instantiated");
	}
	create = async (req, res) => {
		console.log(req.body);

		const { title, context, is_active } = req.body; //destructuring

		if (title && context && is_active) {
			const restult = await Song.create(req.body);
			res.status(200).send({
				messeage: "Record created successfully",
				newid: restult.id,
			});
		} else {
			res.status(403).send({
				messeage: "wrong parameter values",
			});
		}
		// const song = new Song({title, content, is_active});
		// try {
		// 	await song.save();
		// 	res.status(201).json({

		// console.log("create metode");
	};
}
