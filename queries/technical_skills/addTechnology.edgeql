insert Technology
{
  name := <optional str>$name,
  stack := (
    select TechStack
    filter .stack = <optional str>$stack
    limit 1
  )
} unless conflict on .name;