import mongoose from "mongoose";

import "../models/Note";

const Note = mongoose.model("Note");

export function setUpConnection() {
  mongoose.connect("mongodb://localhost:27017/vue", { useNewUrlParser: true });
}

export function listNotes() {
  return Note.find();
}

export function createNote(data) {
  const note = new Note({
    text: data.text,
    createdAt: new Date(),
    editedAt: new Date()
  });

  return note.save();
}

// export function editCheckBox(req, res) {
//   Note.findById(req.params.id, (err, note) => {
//     note.text = req.body.text;
//     note.checked = !note.checked;
//     note.save();
//     res.json(note);
//     // console.log(note);
//   });
// }

export function upDate(req, res) {
  Note.findById(req.params.id, (err, note) => {
    // console.log(!req.body.checked);
    note.color = req.body.color;
    note.text = req.body.text;
    note.checked = req.body.checked;
    note.editedAt = new Date();
    note.save();
    res.json(note);
  });
}

export function deleteNote(req, res) {
  Note.findByIdAndDelete(req.params.id).exec();
  res.json("success: true");
  // console.log(req.params.id);
}
