var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.newSkill);
router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.deleteSkill);
router.get('/:id/edit', skillsCtrl.editSkill);
router.put('/:id', skillsCtrl.update);

module.exports = router;
