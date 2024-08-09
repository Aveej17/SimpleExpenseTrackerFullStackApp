const express = require('express');
const router = express.Router();

const Controller = require('../controllers/controller'); 

router.get('/', Controller.getExpenses);
router.delete('/:id', Controller.deleteExpenses);
router.post('/', Controller.postExpenses);

module.exports= router;