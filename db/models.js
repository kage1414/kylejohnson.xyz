const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/', {
  dbName: 'kylejohnson-xyz'
}, () => {
  console.log("connected");
});

const technicalSkillsSchema = mongoose.Schema({
  type: String,
  technologies: [String]
});

const TechnicalSkills = mongoose.model('technicalSkills', technicalSkillsSchema);

const applicationsSchema = mongoose.Schema({
  name: String,
  url: String,
  technologies: [String],
  desription: [String]
});

const Applications = mongoose.model('applications', applicationsSchema);

const educationSchema = mongoose.Schema({
  school: String,
  time: String,
  cetificate: String,
  degree: String
});

const Education = mongoose.model('education', educationSchema);

const experienceSchema = mongoose.Schema({
  employer: String,
  time: String,
  position: String,
  description: [String]
});

const Experience = mongoose.model('experience', experienceSchema);

module.exports = {
  TechnicalSkills,
  Applications,
  Education,
  Experience
};
