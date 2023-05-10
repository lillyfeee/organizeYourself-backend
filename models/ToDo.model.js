const { Schema, model } = require("mongoose"); 

const toDoSchema = new Schema (
    {
    name: {
        type: String,
        enum: ["today", "weekly", "general", "personal"],
        default: "today",
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
}
);

module.exports = model("ToDo", toDoSchema)