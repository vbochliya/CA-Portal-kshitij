const router = require('express').Router();
const signup_controller = require('../controllers/signup_controller');
// router.get('/', (req, res) => { res.send("test") });
router.post('/', signup_controller.signup);

module.exports = router;