select Technology {
  id,
  name,
  stack := .<technologies[is TechStack] { stack }
}