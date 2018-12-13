const Posts = require('../models').Posts;
const Comments = require('../models').Comments;

module.exports = {
  create(req, res) {
    return Comments
      .create({
        commentsid: req.body.commentsid,
        comment:req.body.comment,
        postid: req.body.postid,
        userid: req.body.userid,
        timestamp: req.body.timestamp,
        foreignkey: req.body.foreignkey,
      })
      .then(comments => res.status(201).send(comments))
      .catch(error => {
          console.log('error', error);
          res.status(400).send(error)
        });
  },
};