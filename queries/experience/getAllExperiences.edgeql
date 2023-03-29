select Experience 
{
  id,
  employer, 
  position, 
  time, 
  active, 
  descriptions: {description, id} order by .priority asc,
  priority
}
order by .priority asc;