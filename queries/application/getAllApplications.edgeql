select Application {
  id, 
  name, 
  url,
  active, 
  descriptions: {description, id}, 
  technologies: {name, url, id},
  priority
}
order by .priority asc;