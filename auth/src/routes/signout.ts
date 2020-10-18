import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send('Budddgetzzzz');
});

export {router as signoutRouter};