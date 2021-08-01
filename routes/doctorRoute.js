const express = require('express');
const doctor = require('../controllers/doctor');
const router = express.Router();

router.route('/').get(doctor.getAllDoctor).post(doctor.createDoctor); // chain route

router
  .route('/:id')
  .get(doctor.getDoctor)
  .put(doctor.updateDoctor)
  .delete(doctor.deleteDoctor);

module.exports = router;
