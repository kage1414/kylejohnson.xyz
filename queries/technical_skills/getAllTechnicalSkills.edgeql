select TechStack {
  stack,
  technologies := (select (.<stack[is Technology] {
    name,
    url,
    priority
  }) order by .priority asc),
}
order by .stack asc;