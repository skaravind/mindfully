const router = require('express').Router();
const { authenticationMiddleware } = require('../middlewares/authentication');
const mondayController = require('../controllers/monday-controller');

router.post('/monday/get_types/:category', authenticationMiddleware, mondayController.getTypeOptions);
router.post('/monday/calculate_carbon_footprint/:category', authenticationMiddleware, mondayController.calcCarbonFootprint);

module.exports = router;
