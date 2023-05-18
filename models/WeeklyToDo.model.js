const { Schema, model } = require("mongoose"); 

const weeklySchema = new Schema (
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

module.exports = model("WeeklyTasks", weeklySchema)