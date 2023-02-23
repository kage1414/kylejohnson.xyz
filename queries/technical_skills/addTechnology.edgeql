insert Technology
{
  name := <str>$name,
  stack := (
    select TechStack
    filter .stack = <str>$stack
    limit 1
  )
} unless conflict on .name;