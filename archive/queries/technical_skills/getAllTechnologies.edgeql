select Technology {
  id,
  name,
  stack: {stack, id},
  priority
}
order by .name asc;