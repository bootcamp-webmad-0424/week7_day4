const { model, Schema } = require("mongoose");

const cohortSchema = new Schema({
    cohortSlug: String,
    cohortName: String,
    program: String,
    format: String,
    campus: String,
    startDate: Date,
    endDate: Date,
    inProgress: Boolean,
    programManager: String,
    leadTeacher: String,
    totalHours: Number
},
    {
        timestamps: true
    });

const Cohort = model("Cohort", cohortSchema);
module.exports = Cohort;