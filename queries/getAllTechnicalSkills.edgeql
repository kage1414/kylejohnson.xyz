select TechStack {
  stack,
  technologies := .<stack[is Technology] {
    name,
    url,
    priority
  },
}
order by .stack asc;