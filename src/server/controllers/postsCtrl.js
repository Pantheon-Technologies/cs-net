const Posts = require('../models').Posts;
const Comments = require('../models').Comments;

module.exports = {
  create(req, res) {
    return Posts
      .create({
        postid: req.body.postid,
        posttext:req.body.posttext,
        userid: req.body.userid,
        timestamp: req.body.timestamp,
        foreignkey: req.body.foreignkey,
      })
      .then(posts => res.status(201).send(posts))
      .catch(error => {
          console.log('error', error);
          res.status(400).send(error)
        });
  },
  retrieve(req, res) {
    return Posts
      .findById(req.params.postid, {
        include: [{
            model: Comments,
            as: 'comments',
          }],
      })
      .then(posts => {
        if (!posts) {
          return res.status(404).send({
            message: 'Post Not Found',
          });
        }
        return res.status(200).send(posts);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Posts
      .findById(req.params.postid)
      .then(posts => {
        if (!posts) {
          return res.status(404).send({
            message: 'Post Not Found',
          });
        }
        return posts
          .update({
            posttext: req.body.posttext,
          })
          .then(() => res.status(200).send(posts))  // Send back the updated posts.
          .catch((error) => {
            console.log('errrrrrror', posts)
            res.status(400).send(error)}
            );
      })
      .catch((error) => {
        res.status(400).send(error)
      });
  },

  destroy(req, res) {
    return Posts
      .find({
        where: {
          id: req.params.postid,
          userid: req.params.userid,
        },
      })
      .then(posts => {
        if (!posts) {
          return res.status(404).send({
            message: 'Post Not Found',
          });
        }

        return posts
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};