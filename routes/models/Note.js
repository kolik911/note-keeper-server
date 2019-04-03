import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  color: { type: String, default: "#fff" },
  text: { type: String },
  checked: { type: Boolean, default: false },
  createdAt: { type: Date },
  editedAt: { type: Date }
});

const Note = mongoose.model("Note", NoteSchema);
