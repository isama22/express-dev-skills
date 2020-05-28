
const Skill = require('../models/skill');

const index = (req, res, next) => {
  res.render('skills/index', {
     skills: Skill.getAll(),
     time: req.time
    });
}

const show = (req, res, next) => {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    id: parseInt(req.params.id)
  });
}

const newSkill = (req, res) => {
  res.render('skills/new')
}

const create = (req, res) => {
  console.log(req.body);
  req.body.done = false;
  Skill.create(req.body);
  res.redirect('/skills');
}

const deleteSkill = (req, res) => {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function update(req, res) {
  // req.body.done = req.body.done === 'on';
  // Skill.update(req.params.id, req.body);
  // res.redirect('/skills');
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);

}

const editSkill = (req, res) => {
  // res.render('skills/edit', {
  //   skill: Skill.getOne(req.params.id),
  //   idx: req.params.id
  var skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    skill,
    skillIdx: req.params.id

  });
};




module.exports = {
    index,
    show,
    newSkill,
    create,
    deleteSkill,
    editSkill,
    update
}