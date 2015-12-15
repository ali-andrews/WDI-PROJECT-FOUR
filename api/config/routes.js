var express           = require('express');
var router            = express.Router();
var productsController   = require('../controllers/productsController');
var authenticationController = require('../controllers/authenticationController');
var usersController = require('../controllers/usersController');
var ordersController = require('../controllers/ordersController');

router.route('/products').get(productsController.productsIndex)
router.route('/products/:id').get(productsController.productsShow)

router.post('/authorize', authenticationController.login);
router.post('/join', authenticationController.signup);

router.post('/checkout', ordersController.checkout);


// router.post('/login', staticsController.login)
// router.post('/register', staticsController.register)

router.route('/users')
.get(usersController.indexUsers);

//   router.route('/users/:id')
//     .get(usersController.usersShow)
//     .put(usersController.usersUpdate)
//     .patch(usersController.usersUpdate)
//     .delete(usersController.usersDelete)


module.exports = router