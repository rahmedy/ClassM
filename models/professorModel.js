const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const professorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    office: {
        type: String,
        required: true,
        unique: true
    },
    office_hours: {
        type: String,
        required: true,
        unique: true
    },
    classes: [...
        {
            CRN: Number,
            className: String
        }
    ]
});

const Professor = mongoose.model("professor", professorSchema);

module.exports = Professor;