/* specializationRoute.js use for the specialization route to handle to use with controller */

const express = require('express');
const sp = require('../controllers/specialization');
const router = express.Router();
const jwt = require('../helpers/jwt');

// Reading is public (the register page lists specializations); changes are staff-only.
router.route('/').get(sp.getAllSp).post(jwt.userVerify(['staff']), sp.createSp);

router
  .route('/:id')
  .get(sp.getSp)
  .put(jwt.userVerify(['staff']), sp.updateSp)
  .delete(jwt.userVerify(['staff']), sp.deleteSp);

module.exports = router;
