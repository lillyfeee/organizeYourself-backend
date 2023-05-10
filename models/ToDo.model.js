const { Schema, model } = require("mongoose"); 

const toDoSchema = new Schema (
    {
    name: {
        type: String,
        enum: ["today", "weekly", "general", "personal"],
        default: "today"
    },
    isDone: false,
    description: String,
}
);

module.exports = model("ToDo", toDoSchema)