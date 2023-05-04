select TechStack {
  id,
  stack,
  technologies := .<stack[is Technology] {
    name,
    url,
    priority
  }
};