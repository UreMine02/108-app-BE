import notes from "../models/note.js";

export const createNote = async (req, res) => {
	console.log(req.body);
	const newNote = new notes(req.body);
	try {
		await newNote.save();
		res.status(201).json(newNote);
	} catch (error) {
		res.status(409).json({ message: error });
	}
};

