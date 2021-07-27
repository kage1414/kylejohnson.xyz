const models = require('./models');

const insertOneTechnology = (req, res) => {
  
  let type = req.body.technicalSkills.type;
  let technology = req.body.technicalSkills.technology

  let query = models.TechnicalSkills.updateOne({type},
    { $addToSet: {technologies: technology} },
    { upsert: true }
  ).exec()

  Promise.resolve(query)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      if (err) {
        res.status(400);
        res.send(err);
      } else {
        res.sendStatus(400);
      }
    })

}

const insertTechnologies = (req, res) => {

  let technicalSkills = req.body.technicalSkills;

  let queries = [];

  technicalSkills.forEach((skill) => {
    let type = skill.type;
    let technologies = skill.technologies

    let query = models.TechnicalSkills.updateOne({type},
      { $addToSet: {technologies: technologies} },
      { upsert: true }
    ).exec()

    queries.push(query);
  })

  Promise.all(queries)
    .then((response) => {
      let count = 0;
      response.forEach((resp) => {
        if (resp.upserted) {
          count++;
        }
      })
      res.status(200);
      res.send(`Updated ${count} skillsets`)
    })
    .catch((err) => {
      if (err) {
        console.log('err', err);
        res.status(400);
        res.send(err);
      } else {
        res.sendStatus(400);
      }
    })

}

module.exports.insertOneTechnology = insertOneTechnology;
module.exports.insertTechnologies = insertTechnologies;