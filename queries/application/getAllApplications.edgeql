select Application {
  id, 
  name, 
  url,
  active, 
  descriptions: {description, id}, 
  technologies: {name, url, id} order by .priority asc,
  priority
}
order by .priority asc;