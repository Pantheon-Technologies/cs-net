const usersController = require('../controllers/usersCtrl.js');
const postsController = require('../controllers/postsCtrl.js');
const commentsController = require('../controllers/commentsCtrl.js');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the CS-NET',
  }));

  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);

  app.get('/api/users/:userid', usersController.retrieve);
  app.put('/api/users/:userid', usersController.update);
  app.delete('/api/users/:userid', usersController.destroy);

  app.get('/api/users/:userid/post/:postid', postsController.retrieve);
  app.post('/api/users/:userid/post', postsController.create);
  app.put('/api/users/:userid/post/:postid/', postsController.update);
  app.delete('/api/users/:userid/post/:postid', postsController.destroy);


  app.post('/api/users/:userid/post/:postid/comment', commentsController.create);

};