var express           = require('express');
var router            = express.Router();
var productsController   = require('../controllers/productsController');


router.route('/products')
 .get(productsController.productsIndex)
 

router.route('/products/:id')
 .get(productsController.productsShow)


// router.post('/login', staticsController.login)
// router.post('/register', staticsController.register)

// router.route('/users')
//   .get(usersController.usersIndex)

//   router.route('/users/:id')
//     .get(usersController.usersShow)
//     .put(usersController.usersUpdate)
//     .patch(usersController.usersUpdate)
//     .delete(usersController.usersDelete)


module.exports = router