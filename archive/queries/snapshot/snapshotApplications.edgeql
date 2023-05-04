select Application {
  name,
  url,
  active,
  priority,
  technologies: {
    name,
    url,
    priority
  },
  descriptions: {
    description,
    priority
  },
};