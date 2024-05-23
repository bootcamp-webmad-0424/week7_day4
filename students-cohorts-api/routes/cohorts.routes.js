const router = require("express").Router();

const Cohort = require('../models/Cohort.model')


router.post('/', (req, res) => {

  const { cohortSlug, cohortName, program, format, campus, startDate, endDate, inProgress, programManager, leadTeacher, totalHours } = req.body

  Cohort
    .create({ cohortSlug, cohortName, program, format, campus, startDate, endDate, inProgress, programManager, leadTeacher, totalHours })
    .then(newCohort => res.sendStatus(201))
    .catch(err => res.json({ code: 500, errorDetails: err }))
})


router.get('/', (req, res) => {

  Cohort
    .find()
    .then(allCohorts => res.json(allCohorts))
    .catch(err => res.json({ code: 500, errorDetails: err }))
})


router.get('/:cohortId', (req, res) => {

  const { cohortId } = req.params

  Cohort
    .findById(cohortId)
    .then(cohort => res.json(cohort))
    .catch(err => res.json({ code: 500, errorDetails: err }))
})


router.put('/:cohortId', (req, res) => {

  const { cohortId } = req.params
  const { cohortSlug, cohortName, program, format, campus, startDate, endDate, inProgress, programManager, leadTeacher, totalHours } = req.body

  Cohort
    .findByIdAndUpdate(cohortId, { cohortSlug, cohortName, program, format, campus, startDate, endDate, inProgress, programManager, leadTeacher, totalHours })
    .then(updatedCohort => res.sendStatus(204))
    .catch(err => res.json({ code: 500, errorDetails: err }))

})



router.delete('/:cohortId', (req, res) => {

  const { cohortId } = req.params

  Cohort
    .findByIdAndDelete(cohortId)
    .then(() => res.sendStatus(204))
    .catch(err => res.json({ code: 500, errorDetails: err }))
})

module.exports = router;
