select Experience 
{
  id,
  employer, 
  position, 
  time, 
  active, 
  descriptions: {description, id},
  priority
}
order by .priority asc;