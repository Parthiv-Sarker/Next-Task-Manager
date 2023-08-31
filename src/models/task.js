import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
    date: {
		type: Date,
        default:Date.now(),
	},
    status: {
		type: String,
        enum: ["pending","completed"],
        default: "pending",
	},
	userId: {
		type: String,
		required: true,
	}
});

export const Task =
	mongoose.models.tasks || mongoose.model("tasks", TaskSchema);
