const router = require('express').Router();

const getUser = () => 'Daniel';

router.get('/', (req, res) => {
  res.status(201).send({
    status: 'success',
    username: 'Daniel',
    todd: 'Domme'
  });
  console.log('----Server: Get:/user/daniel');
});

module.exports = router;
