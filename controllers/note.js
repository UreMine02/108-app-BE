import BenhNhan from "../models/BenhNhanModel.js";

export const createNote = async (req, res) => {
	const newNote = new BenhNhan(req.body);
	try {
		await newNote.save();
		res.status(200).json(newNote);
	} catch (error) {
		res.status(409).json({ message: error });
	}
};

export const getNotes = async (req, res) => {
	const { search } = req.query;
	try {
		const notes = await BenhNhan.find(search ? { ten: { $regex: search, $options: "i" } } : {});
		res.status(200).json(notes);
	} catch (error) {
		res.status(404).json({ message: error });
	}
}

export const getNote = async (req, res) => {
	const { id } = req.params;
	try {
		const note = await BenhNhan.findById(id);
		res.status(200).json(note);
	} catch (error) {
		res.status(404).json({ message: error });
	}
}

export const updateNote = async (req, res) => {
	const { id } = req.params;
	const note = req.body;
	try {
		const updatedNote = await BenhNhan.findByIdAndUpdate(id, note, { new: true });
		res.status(200).json(updatedNote);
	}
	catch (error) {
		res.status(409).json({ message: error });
	}
}

export const deleteNote = async (req, res) => {
	const { id } = req.params;
	try {
		await BenhNhan.findByIdAndRemove(id);
		res.status(200).json("Note deleted successfully");
	} catch (error) {
		res.status(409).json({ message: error });
	}
}

