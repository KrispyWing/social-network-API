const router = require('express').Router();
const userRoutes = require('./user-routes');

//add prefix of /users tou routes created in user-routes
router.use('/users', userRoutes);

module.exports = router;