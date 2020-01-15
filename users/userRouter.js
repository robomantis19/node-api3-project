const express = require('express');
const Users = require('./userDb.js'); 
const router = express.Router();


router.post('/:id/posts', (req, res) => {
  // do your magic!
    const Info = {...req.body, id: req.params.id}
    Users.insert(Info)
    .then(users2 => { 
      res.status(200).json(users2);

    })
    .catch(err => { 
      console.log(err); 
      res.status(500).json({errorMessage: "error in post request"}); 
    })

});

router.get('/', (req, res) => {
  // do your magic!
  Users.get(req.query)
  .then(users => { 
    res.status(200).json(users);
  })
  .catch(err => { 
    res.status(500).json({message: "error in get request"})
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
  Users.getById(req.params.id)
  .then(users => { 
    res.status(200).json(users); 
  })
  .catch(err => { 
    res.status(500).json({message: "error in get by Id"})
  })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  Users.getUserPosts(req.params.id)
  .then(users => { 
    res.status(200).json(users)
  })
  .catch(err => { 
    console.log('get by id posts error: ', err); 
    res.status(500).json({message: "get posts by id error"})
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
