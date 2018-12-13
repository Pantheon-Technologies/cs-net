const Users = require('../models').Users;
const Posts = require('../models').Posts;


module.exports = {
  create(req, res) {
    return Users
      .create({
        iconurl: req.body.iconurl,
        userid: req.body.userid,
        username:req.body.username,
        realname: req.body.realname,
        timestamp: req.body.timestamp
      })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Users
      .findAll({
        include: [{
          model: Posts,
          as: 'posts',
        }],
      })
      .then(users => res.status(200).send(users))
      .catch(error => {
        console.log('error', error)
        res.status(400).send(error)
      });
  },
  retrieve(req, res) {
    return Users
      .findById(req.params.userid, {
        include: [{
          model: Posts,
          as: 'posts',
        }],
      })
      .then(users => {
        if (!users) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(users);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Users
      .findById(req.params.userid)
      .then(users => {
        if (!users) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return users
          .update({
            realname: req.body.realname
          })
          .then(() => res.status(200).send(users))  // Send back the updated users.
          .catch((error) => {
            console.log('errrrrrror', error)
            res.status(400).send(error)}
            );
      })
      .catch((error) => {
        res.status(400).send(error)
      });
  },
  destroy(req, res) {
    return Users
      .findById(req.params.userid)
      .then(users => {
        if (!users) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return users
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};