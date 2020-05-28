const skills = [
    { skill: 'CSS', done: true },
    { skill: 'Express', done: false },
    { skill: 'whistle', done: false }
  ];
  const getAll = () => {
    return skills;
  }
  const getOne = (id) => {
    return skills[id];
  }

  const create = (skill) => {
    skills.push(skill);
  }
//add methods here to update / delete data here
const deleteOne = (id) => {
  skills.splice(id, 1);
}


  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };