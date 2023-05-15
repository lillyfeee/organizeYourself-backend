const { Schema, model } = require("mongoose"); 

const tasksSchema = new Schema (
    {
    tasks: {
        type: String,
        /* enum: ["today", "weekly", "goals", "personal"],
        default: "today", */
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
}
);

module.exports = model("Tasks", tasksSchema)