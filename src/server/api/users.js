const router = require('express').Router();

const getUser = () => 'Daniel';

router.get('/', (req, res) => {
  res.send({ randomName: getUser() });
  console.log('----Server: Get:/user/daniel');
});

module.exports = router;
