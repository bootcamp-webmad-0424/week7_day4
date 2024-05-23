const router = require("express").Router()

const Student = require('./../models/Student.model')

router.post('/', (req, res) => {

  const { firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohort, projects } = req.body

  Student
    .create({ firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohort, projects })
    .then(newStudent => res.sendStatus(201))
    .catch(err => res.json({ code: 500, errorDetails: err }))

})

router.get('/', (req, res) => {

  Student
    .find()
    .then(allStudents => res.json(allStudents))
    .catch(err => res.json({ code: 500, errorDetails: err }))
})

router.get('/cohort/:cohortId', (req, res) => {

  const { cohortId } = req.params

  Student
    .find({ cohort: cohortId })
    .populate('cohort')
    .then(allStudents => res.json(allStudents))
    .catch(err => res.json({ code: 500, errorDetails: err }))

})

router.get('/:studentId', (req, res) => {

  const { studentId } = req.params

  Student
    .findById(studentId)
    .then(student => res.json(student))
    .catch(err => res.json({ code: 500, errorDetails: err }))

})

router.put('/:studentId', (req, res) => {

  const { studentId } = req.params
  const { firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohort, projects } = req.body

  Student
    .findByIdAndUpdate(studentId, { firstName, lastName, email, phone, linkedinUrl, languages, program, background, image, cohort, projects })
    .then(updatedStudent => res.sendStatus(204))
    .catch(err => res.json({ code: 500, errorDetails: err }))

})

router.delete('/:studentId', (req, res) => {

  const { studentId } = req.params

  Student
    .findByIdAndDelete(studentId)
    .then(() => res.sendStatus(204))
    .catch(err => res.json({ code: 500, errorDetails: err }))
})

module.exports = router;
