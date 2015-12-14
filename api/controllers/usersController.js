var User = require('../models/user');

function indexUsers(req, res){
  User.find(function(error, users){
    if (error) return res.status(404).json({message: 'There is no MI6, and there are no agents here.'});
    return res.status(200).send(agents);
  });
}

function createUser(req, res){
  var user = new User(req.body);
  user.save(function(error){
    if (error) return res.status(403).send({message: "Welcome to babybag- User created! "})
    return res.status(200).send(user);
  });
}

function showUser(req, res){
  var id = req.params.id;
  User.findById({_id: id}, function(error, user){
    if (error) return res.status(404).send({message: 'You have not signed up.'})
    return res.status(200).send(user);
  });
}

function updateUser(req, res){
  var id = req.params.id;
  User.findById({_id: id}, function(error, user) {
    if (error) return res.status(404).send({message: 'You seem to be mistaken, we have no agent with that identity.'})

    if (req.body.username) user.username = req.body.username;
    if (req.body.firstname) user.firstname     = req.body.firstname;
    if (req.body.street) user.street     = req.body.street;
    if (req.body.address) user.address = req.body.address;
    if (req.body.city) user.city = req.body.city;
    if (req.body.postcode) user.postcode = req.body.postcode;


    user.save(function(error) {
      if (error) return res.status(500).send({message: "There seems to be some error in updating your user profile."})
      return res.status(200).send(user);
    });
  });
}


module.exports = {
  indexUsers: indexUsers,
  createUser: createUser,
  showUser: showUser,
  updateUser: updateUser,
}