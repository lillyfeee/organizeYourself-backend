const { Schema, model } = require("mongoose"); 

const gratefulSchema = new Schema (
    {
        name: {
        type: String,}
    },)

    module.exports = model("Name", gratefulSchema)