select Application {
  id, 
  name, 
  url,
  active, 
  descriptions: {description, id} order by .priority asc, 
  technologies: {name, url, id} order by .priority asc,
  priority
}
order by .priority asc;