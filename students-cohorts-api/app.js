require("dotenv").config()
require("./db")

const express = require("express")
const app = express()

require("./config")(app)


// Index routes
const indexRoutes = require("./routes/index.routes")
app.use("/api", indexRoutes)

// Students routes
const studentsRouter = require("./routes/students.routes")
app.use("/api/students", studentsRouter)

// Cohorts routes
const cohortsRouter = require("./routes/cohorts.routes")
app.use("/api/cohorts", cohortsRouter)



require("./error-handling")(app)

module.exports = app