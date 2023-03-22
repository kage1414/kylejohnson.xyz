insert Technology
{
  name := <optional str>$name,
  url := <optional str>$url,
  priority := <optional int32>$priority,
  stack := (
    select TechStack
    filter .stack = <optional str>$stack
    limit 1
  )
} unless conflict on .name;